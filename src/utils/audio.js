/* =========================================================================
   AUDIO ENGINE — Complete Non-Overlapping Narration Pipeline
   Voice: Alice (Clear, Engaging Educator) — Voice ID: Xb7hH8MSUJpSbSDYk0k2
   Model: eleven_multilingual_v2
   ---------------------------------------------------------------------------
   1. Cache check   → audioMap[text] (pre-generated static MP3, zero latency)
   2. Fallback      → browser speechSynthesis (only if unmapped)
   Strict single-audio lifecycle:
   - Only ONE Audio element exists in the entire app.
   - Any stopNarration() immediately kills current audio + speech synthesis.
   - AbortError from pausing in-flight audio NEVER triggers fallback speech.
   ========================================================================= */
import { audioMap } from './audioMap.js';

export const VOICE_ID = 'Xb7hH8MSUJpSbSDYk0k2';
export const MODEL_ID = 'eleven_multilingual_v2';

export const STYLE_SETTINGS = {
  celebration:   { stability: 0.12, similarity_boost: 0.45, style: 0.75, use_speaker_boost: true, rate: 1.06, pitch: 1.2 },
  encouragement: { stability: 0.16, similarity_boost: 0.50, style: 0.65, use_speaker_boost: true, rate: 1.0,  pitch: 1.1 },
  question:      { stability: 0.20, similarity_boost: 0.55, style: 0.55, use_speaker_boost: true, rate: 0.98, pitch: 1.08 },
  emphasis:      { stability: 0.16, similarity_boost: 0.50, style: 0.60, use_speaker_boost: true, rate: 0.95, pitch: 1.05 },
  thinking:      { stability: 0.24, similarity_boost: 0.60, style: 0.35, use_speaker_boost: true, rate: 0.90, pitch: 0.95 },
  statement:     { stability: 0.20, similarity_boost: 0.55, style: 0.50, use_speaker_boost: true, rate: 1.0,  pitch: 1.0 },
  instruction:   { stability: 0.20, similarity_boost: 0.55, style: 0.50, use_speaker_boost: true, rate: 1.0,  pitch: 1.0 }
};

const settingsFor = style => STYLE_SETTINGS[style] || STYLE_SETTINGS.statement;

export let audioMuted = false;
let currentQueue = 0;

// Single global HTMLAudioElement instance ensures impossible concurrent playback
let globalAudio = null;
function getGlobalAudio() {
  if (typeof window === 'undefined') return null;
  if (!globalAudio) {
    globalAudio = new Audio();
  }
  return globalAudio;
}

/** Resolve a playable URL for a phrase from the pre-generated static audioMap. */
export function getAudioUrl(text) {
  if (!text) return Promise.resolve(null);
  if (audioMap[text]) return Promise.resolve(audioMap[text]);
  return Promise.resolve(null);
}

/* ------------------------------- Playback ------------------------------- */
function pickVoice() {
  if (typeof window === 'undefined' || !('speechSynthesis' in window)) return null;
  const voices = window.speechSynthesis.getVoices();
  if (!voices.length) return null;
  return (
    voices.find(v => /female|alice|zira|samantha|victoria|google us english/i.test(v.name)) ||
    voices.find(v => v.lang && v.lang.startsWith('en')) ||
    voices[0]
  );
}
let ttsVoice = null;
if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
  window.speechSynthesis.onvoiceschanged = () => { ttsVoice = pickVoice(); };
  ttsVoice = pickVoice();
}

function stopInternalAudio() {
  const audio = getGlobalAudio();
  if (audio) {
    try {
      audio.pause();
      audio.currentTime = 0;
      audio.src = '';
    } catch (e) {}
  }
  if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
    try {
      window.speechSynthesis.cancel();
    } catch (e) {}
  }
}

function fallbackSpeech(seg, queueId) {
  return new Promise(resolve => {
    if (queueId !== currentQueue || audioMuted || typeof window === 'undefined' || !('speechSynthesis' in window) || !seg.text) {
      return resolve();
    }
    const cfg = settingsFor(seg.style);
    const utter = new SpeechSynthesisUtterance(seg.text);
    if (ttsVoice) utter.voice = ttsVoice;
    utter.rate = cfg.rate;
    utter.pitch = cfg.pitch;
    utter.onend = () => resolve();
    utter.onerror = () => resolve();
    window.speechSynthesis.speak(utter);
  });
}

function playUrl(url, seg, queueId) {
  return new Promise(resolve => {
    if (queueId !== currentQueue || audioMuted) return resolve();
    stopInternalAudio();

    const audio = getGlobalAudio();
    if (!audio) return resolve();

    let settled = false;
    const done = () => {
      if (!settled) {
        settled = true;
        resolve();
      }
    };

    audio.onended = done;
    audio.onerror = () => {
      if (queueId === currentQueue && !audioMuted) {
        fallbackSpeech(seg, queueId).then(done);
      } else {
        done();
      }
    };

    audio.src = url;
    audio.play().catch(err => {
      // If paused/aborted deliberately by a new action, NEVER fall back to speech synthesis!
      if (err && (err.name === 'AbortError' || queueId !== currentQueue)) {
        done();
        return;
      }
      if (queueId === currentQueue && !audioMuted) {
        fallbackSpeech(seg, queueId).then(done);
      } else {
        done();
      }
    });
  });
}

export function setMuted(m) {
  audioMuted = m;
  if (m) stopNarration();
}

/** Play an array of segments in order. A newer narrate() call cancels older ones immediately. */
export async function narrate(segments, autoplay = true) {
  if (!autoplay || audioMuted) return;
  stopNarration();
  const myQueue = ++currentQueue;
  const list = (Array.isArray(segments) ? segments : [segments]).filter(s => s && s.text);
  if (!list.length) return;

  for (let i = 0; i < list.length; i++) {
    if (myQueue !== currentQueue || audioMuted) return;
    const item = list[i];
    const url = await getAudioUrl(item.text);
    if (myQueue !== currentQueue || audioMuted) return;
    if (url) {
      await playUrl(url, item, myQueue);
    } else {
      await fallbackSpeech(item, myQueue);
    }
    if (myQueue !== currentQueue || audioMuted) return;
  }
}

export function stopNarration() {
  currentQueue++;
  stopInternalAudio();
}

/* --------------------------- Segment helpers ---------------------------- */
export const say = text => ({ text, style: 'statement' });
export const ask = text => ({ text, style: 'question' });
export const cheer = text => ({ text, style: 'celebration' });
export const encourage = text => ({ text, style: 'encouragement' });
export const emphasize = text => ({ text, style: 'emphasis' });
export const think = text => ({ text, style: 'thinking' });
export const celebrate = text => ({ text, style: 'celebration' });
export const instruct = text => ({ text, style: 'instruction' });
