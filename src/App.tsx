import React, { useEffect, useRef } from 'react';
import { Phone, PhoneOff, AlertCircle } from 'lucide-react';
import { useLiveAPI } from './useLiveAPI';
import { SYSTEM_INSTRUCTION } from './systemInstruction';

/* ═══════════════════════════════════════
   Scroll reveal — visual only
   ═══════════════════════════════════════ */
function useScrollReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add('is-visible');
        });
      },
      { threshold: 0.1 }
    );
    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}

/* ═══════════════════════════════════════
   Professional SVG Icons
   Minimal, geometric, luxury-grade
   ═══════════════════════════════════════ */

function IconWaveform({ size = 28 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 28 28" fill="none" aria-hidden="true">
      <rect x="3"  y="10" width="2.2" height="8"  rx="1.1" fill="currentColor" opacity="0.4" />
      <rect x="7.5"  y="6"  width="2.2" height="16" rx="1.1" fill="currentColor" opacity="0.6" />
      <rect x="12" y="3"  width="2.2" height="22" rx="1.1" fill="currentColor" />
      <rect x="16.5" y="7"  width="2.2" height="14" rx="1.1" fill="currentColor" opacity="0.7" />
      <rect x="21" y="5"  width="2.2" height="18" rx="1.1" fill="currentColor" opacity="0.5" />
      <rect x="25.5" y="9"  width="2.2" height="10" rx="1.1" fill="currentColor" opacity="0.3" />
    </svg>
  );
}

function IconPhone({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
    </svg>
  );
}

function IconMic({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 1a3 3 0 00-3 3v8a3 3 0 006 0V4a3 3 0 00-3-3z" />
      <path d="M19 10v2a7 7 0 01-14 0v-2" />
      <line x1="12" y1="19" x2="12" y2="23" />
      <line x1="8" y1="23" x2="16" y2="23" />
    </svg>
  );
}

function IconCalendar({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
      <line x1="16" y1="2" x2="16" y2="6" />
      <line x1="8" y1="2" x2="8" y2="6" />
      <line x1="3" y1="10" x2="21" y2="10" />
    </svg>
  );
}

function IconCheckCircle({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
      <polyline points="22 4 12 14.01 9 11.01" />
    </svg>
  );
}

function IconClock({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
}

function IconVoice({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 1a3 3 0 00-3 3v8a3 3 0 006 0V4a3 3 0 00-3-3z" />
      <path d="M19 10v2a7 7 0 01-14 0v-2" />
      <path d="M8 21h8" />
      <path d="M12 17v4" />
    </svg>
  );
}

function IconRefresh({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polyline points="23 4 23 10 17 10" />
      <polyline points="1 20 1 14 7 14" />
      <path d="M3.51 9a9 9 0 0114.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0020.49 15" />
    </svg>
  );
}

function IconCoin({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="10" />
      <path d="M14.5 9.5a3 3 0 10-5 0 3 3 0 005 2.5" />
      <line x1="12" y1="6" x2="12" y2="7" />
      <line x1="12" y1="17" x2="12" y2="18" />
    </svg>
  );
}

function IconTooth({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 2C9.5 2 7.5 3 7 5.5C6.5 8 5 9 4 10.5C3 12 3.5 14 4.5 15C5.5 16 6 17.5 6.5 19C7 20.5 8 22 9.5 22C11 22 11.5 20 12 18.5C12.5 20 13 22 14.5 22C16 22 17 20.5 17.5 19C18 17.5 18.5 16 19.5 15C20.5 14 21 12 20 10.5C19 9 17.5 8 17 5.5C16.5 3 14.5 2 12 2Z" />
    </svg>
  );
}

function IconLinkedIn() {
  return (
    <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function IconWhatsApp() {
  return (
    <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}


/* ═══════════════════════════════════════
   APP — Voice agent logic UNTOUCHED
   ═══════════════════════════════════════ */
export default function App() {
  // Voice Agent (UNCHANGED)
  const { isConnected, isConnecting, error, transcript, connect, disconnect } = useLiveAPI(SYSTEM_INSTRUCTION);
  const transcriptEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    transcriptEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [transcript]);

  useScrollReveal();

  return (
    <div className="page">

      {/* ─────────────────────────────────
          1. HERO
          ───────────────────────────────── */}
      <section className="hero">
        <div className="hero-icon">
          <span>ن</span>
        </div>
        <h1>عيادة الابتسامة المشرقة</h1>
        <p className="hero-sub">المساعدة الصوتية الذكية — نورة</p>
      </section>

      {/* ─────────────────────────────────
          2. NORA CARD — CTA
          onClick EXACTLY preserved
          ───────────────────────────────── */}
      <section className="nora-section">
        <div className="nora-card card">

          <div className="nora-avatar">
            <IconWaveform size={30} />
          </div>

          {/* Status */}
          <div className={`status ${
            isConnected ? 'status--connected'
              : isConnecting ? 'status--connecting'
              : 'status--available'
          }`}>
            <span className={`status-dot ${
              isConnected ? 'status-dot--red'
                : isConnecting ? 'status-dot--amber'
                : 'status-dot--green'
            }`} />
            {isConnected ? 'في مكالمة' : isConnecting ? 'جاري الاتصال' : 'متاحة الآن'}
          </div>

          <h2 className="nora-title">تحدث مع نورة</h2>
          <p className="nora-desc">
            نورة هي مساعدتك الذكية لحجز المواعيد والاستفسار عن خدمات عيادة الابتسامة المشرقة
          </p>

          {/* CTA — onClick UNCHANGED */}
          <button
            onClick={isConnected ? disconnect : connect}
            disabled={isConnecting}
            className={`cta ${
              isConnected ? 'cta--connected'
                : isConnecting ? 'cta--connecting'
                : 'cta--idle'
            }`}
            id="nora-call-button"
          >
            {isConnecting ? (
              <>
                <span className="spinner" aria-hidden="true" />
                <span>جاري الاتصال</span>
              </>
            ) : isConnected ? (
              <>
                <span className="sound-bars" aria-hidden="true">
                  <span className="sound-bar" />
                  <span className="sound-bar" />
                  <span className="sound-bar" />
                </span>
                <span>إنهاء المكالمة</span>
                <PhoneOff size={18} />
              </>
            ) : (
              <>
                <Phone size={18} />
                <span>اتصل بنورة</span>
              </>
            )}
          </button>

          <p className="cta-sub">
            {isConnecting ? 'يُرجى الانتظار...' : isConnected ? 'نورة تستمع إليك الآن' : 'مكالمة مجانية · لا تحتاج تسجيل'}
          </p>

          {error && (
            <div className="error">
              <AlertCircle size={14} />
              <span>{error}</span>
            </div>
          )}
        </div>
      </section>

      {/* Transcript (UNCHANGED logic) */}
      {transcript.length > 0 && (
        <section className="transcript-wrap">
          <div className="transcript card">
            <div className="transcript-head">
              <span className="transcript-head-dot" />
              <h3>سجل المحادثة</h3>
            </div>
            <div className="transcript-body">
              {transcript.map((msg, idx) => (
                <div key={idx} className={`msg-row ${msg.sender === 'user' ? 'msg-row--user' : 'msg-row--agent'}`}>
                  <div className={`msg ${msg.sender === 'user' ? 'msg--user' : 'msg--agent'}`}>
                    {msg.text}
                  </div>
                </div>
              ))}
              <div ref={transcriptEndRef} />
            </div>
          </div>
        </section>
      )}

      {/* ── Separator ── */}
      <div className="separator" aria-hidden="true" />

      {/* ─────────────────────────────────
          3. HOW IT WORKS
          ───────────────────────────────── */}
      <section className="section reveal">
        <h2 className="section-title">كيف <em>تعمل</em></h2>
        <div className="steps">
          <div className="step card">
            <span className="step-icon-wrap"><IconPhone size={22} /></span>
            <span className="step-num">١</span>
            <p className="step-text">اتصل بنورة</p>
          </div>
          <div className="step card">
            <span className="step-icon-wrap"><IconMic size={22} /></span>
            <span className="step-num">٢</span>
            <p className="step-text">أخبرها بحالتك</p>
          </div>
          <div className="step card">
            <span className="step-icon-wrap"><IconCheckCircle size={22} /></span>
            <span className="step-num">٣</span>
            <p className="step-text">يتم حجز موعدك</p>
          </div>
        </div>
      </section>

      {/* ── Separator ── */}
      <div className="separator--diamond separator" aria-hidden="true" />

      {/* ─────────────────────────────────
          4. WHAT YOU CAN TRY
          ───────────────────────────────── */}
      <section className="section reveal">
        <h2 className="section-title">جرّب أن <em>تسأل</em></h2>
        <div className="try card">
          <ul className="try-list">
            <li>
              <span className="try-icon-wrap"><IconCoin size={18} /></span>
              استفسر عن الباقات والأسعار
            </li>
            <li>
              <span className="try-icon-wrap"><IconCalendar size={18} /></span>
              احجز موعد مع الدكتور
            </li>
            <li>
              <span className="try-icon-wrap"><IconClock size={18} /></span>
              اسأل عن أوقات العمل
            </li>
            <li>
              <span className="try-icon-wrap"><IconTooth size={18} /></span>
              اسأل عن الخدمات المتاحة
            </li>
          </ul>
          <p className="try-note">
            نموذج توضيحي — اتصل وتعامل مع نورة كأنك مريض يبي يحجز موعد
          </p>
        </div>
      </section>

      {/* ── Separator ── */}
      <div className="separator" aria-hidden="true" />

      {/* ─────────────────────────────────
          5. KEY FEATURES
          ───────────────────────────────── */}
      <section className="section reveal">
        <h2 className="section-title">مميزات <em>نورة</em></h2>
        <div className="features">
          <div className="feature card">
            <span className="feature-icon-wrap"><IconClock size={22} /></span>
            <p className="feature-text">متاحة على مدار الساعة 24/7</p>
          </div>
          <div className="feature card">
            <span className="feature-icon-wrap"><IconVoice size={22} /></span>
            <p className="feature-text">صوت طبيعي باللهجة المحلية</p>
          </div>
          <div className="feature card">
            <span className="feature-icon-wrap"><IconCalendar size={22} /></span>
            <p className="feature-text">حجز تلقائي للمواعيد</p>
          </div>
          <div className="feature card">
            <span className="feature-icon-wrap"><IconRefresh size={22} /></span>
            <p className="feature-text">ترد على عدة اتصالات بنفس اللحظة</p>
          </div>
        </div>
      </section>

      {/* ── Separator ── */}
      <div className="separator--diamond separator" aria-hidden="true" />

      {/* ─────────────────────────────────
          6. BUILDER CREDIT
          ───────────────────────────────── */}
      <footer className="footer reveal">
        <p className="footer-label">تم بناء هذا المساعد الصوتي بواسطة</p>
        <p className="footer-name">منير علي</p>
        <p className="footer-desc">
          متخصص في بناء المساعدين الصوتيين الذكيين والمواقع الإلكترونية لعيادات الأسنان
        </p>

        <div className="footer-links">
          <a
            href="https://www.linkedin.com/in/eng-muneer-ali-347690269/"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link"
          >
            <IconLinkedIn />
            LinkedIn
          </a>
          <a
            href="https://api.whatsapp.com/send/?phone=967771491931&text&type=phone_number&app_absent=0"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link"
          >
            <IconWhatsApp />
            WhatsApp
          </a>
        </div>

        <p className="footer-note">
          لكل عيادة يتم بناء مساعد صوتي مخصص بالكامل حسب خدماتها وأسعارها وجدول أطبائها
        </p>
      </footer>
    </div>
  );
}
