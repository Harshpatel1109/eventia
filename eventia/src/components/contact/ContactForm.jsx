'use client';

import { useEffect, useRef, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { AnimatePresence, m } from 'motion/react';
import { CircleAlert, CircleCheck, LoaderCircle, Send } from 'lucide-react';
import { cn } from '@/lib/utils';

const ease = [0.22, 1, 0.36, 1];

const fields = {
  firstName: { label: 'First Name', placeholder: 'E.g. John', autoComplete: 'given-name', max: 60 },
  lastName: { label: 'Last Name', placeholder: 'E.g. Doe', autoComplete: 'family-name', max: 60 },
  email: { label: 'Email Address', placeholder: 'E.g. john@doe.com', autoComplete: 'email', type: 'email', max: 254 },
  phone: { label: 'Phone', placeholder: 'E.g. +91 98765 43210', autoComplete: 'tel', type: 'tel', inputMode: 'tel', max: 20 },
  subject: { label: 'Subject', placeholder: 'E.g. Business Partnership', autoComplete: 'off', max: 120 },
};

const empty = { firstName: '', lastName: '', email: '', phone: '', subject: '', message: '', company_website: '' };

function validate(v) {
  const e = {};
  if (!v.firstName.trim()) e.firstName = 'First name is required';
  if (!v.lastName.trim()) e.lastName = 'Last name is required';
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.email.trim())) e.email = 'Enter a valid email address';
  if (!/^\+?[\d\s().-]{6,20}$/.test(v.phone.trim())) e.phone = 'Enter a valid phone number';
  if (v.subject.trim().length < 3) e.subject = 'Subject must be at least 3 characters';
  if (v.message.trim().length < 10) e.message = 'Message must be at least 10 characters';
  return e;
}

export default function ContactForm() {
  const params = useSearchParams();
  const product = (params.get('product') || '').replace(/[^\w\s.\-+()/&]/g, '').slice(0, 60).trim();
  const [values, setValues] = useState(() => ({ ...empty, subject: product ? `Enquiry about ${product}` : '' }));
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle'); // idle | sending | success | error
  const [serverMessage, setServerMessage] = useState('');
  const startedAt = useRef(0);
  const formRef = useRef(null);

  useEffect(() => {
    startedAt.current = Date.now(); // used server-side to spot bots that submit instantly
  }, []);

  const set = (name) => (e) => {
    setValues((v) => ({ ...v, [name]: e.target.value }));
    if (errors[name]) setErrors((x) => ({ ...x, [name]: undefined }));
  };

  async function onSubmit(e) {
    e.preventDefault();
    if (status === 'sending') return;
    const found = validate(values);
    setErrors(found);
    if (Object.keys(found).length) {
      requestAnimationFrame(() => formRef.current?.querySelector('[aria-invalid="true"]')?.focus());
      return;
    }

    setStatus('sending');
    setServerMessage('');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...values, startedAt: startedAt.current }),
      });
      const data = await res.json().catch(() => ({}));
      if (res.ok && data.ok) {
        setStatus('success');
        setValues(empty);
        return;
      }
      if (data.errors) setErrors(data.errors);
      setServerMessage(data.message || 'Something went wrong. Please try again.');
      setStatus('error');
    } catch {
      setServerMessage('Network error. Please check your connection and try again.');
      setStatus('error');
    }
  }

  const inputCls = (name) =>
    cn(
      'w-full rounded-xl border-2 bg-brand-mist/60 px-4 py-3.5 text-base text-ink placeholder:text-ink/40 transition-colors duration-300 focus:border-brand focus:bg-white focus:outline-none',
      errors[name] ? 'border-red-600' : 'border-transparent',
    );

  const renderField = (name, className) => {
    const f = fields[name];
    const id = `contact-${name}`;
    return (
      <div className={className} key={name}>
        <label htmlFor={id} className="mb-1.5 block text-sm font-bold text-ink">
          {f.label} <span aria-hidden="true" className="text-brand-deep">*</span>
        </label>
        <input
          id={id}
          name={name}
          type={f.type || 'text'}
          inputMode={f.inputMode}
          autoComplete={f.autoComplete}
          placeholder={f.placeholder}
          maxLength={f.max}
          required
          value={values[name]}
          onChange={set(name)}
          aria-invalid={errors[name] ? 'true' : undefined}
          aria-describedby={errors[name] ? `${id}-error` : undefined}
          className={inputCls(name)}
        />
        {errors[name] && (
          <p id={`${id}-error`} className="mt-1.5 text-sm font-medium text-red-700">
            {errors[name]}
          </p>
        )}
      </div>
    );
  };

  return (
    <div className="relative overflow-hidden rounded-3xl bg-white p-6 shadow-[0_40px_90px_-40px_rgba(51,51,51,0.45)] ring-1 ring-ink/5 sm:p-9">
      <AnimatePresence mode="wait" initial={false}>
        {status === 'success' ? (
          <m.div
            key="ok"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease }}
            role="status"
            className="flex min-h-[420px] flex-col items-center justify-center text-center"
          >
            <m.span
              initial={{ scale: 0, rotate: -40 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ type: 'spring', stiffness: 260, damping: 16, delay: 0.1 }}
              className="grid size-20 place-items-center rounded-full bg-brand text-white"
            >
              <CircleCheck aria-hidden="true" className="size-10" />
            </m.span>
            <h2 className="h-sub mt-6 text-ink">Thank you!</h2>
            <p className="mt-3 max-w-sm text-ink-soft">Your message has been sent. Our team will get back to you shortly.</p>
            <button
              type="button"
              onClick={() => {
                setStatus('idle');
                startedAt.current = Date.now();
              }}
              className="mt-8 rounded-full border-2 border-brand px-7 py-3 font-semibold text-brand-deep transition-colors hover:bg-brand-deep hover:text-white"
            >
              Send Another Message
            </button>
          </m.div>
        ) : (
          <m.form
            key="form"
            ref={formRef}
            onSubmit={onSubmit}
            noValidate
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            aria-label="Contact form"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              {renderField('firstName')}
              {renderField('lastName')}
              {renderField('email')}
              {renderField('phone')}
              {renderField('subject', 'sm:col-span-2')}
              <div className="sm:col-span-2">
                <label htmlFor="contact-message" className="mb-1.5 block text-sm font-bold text-ink">
                  Message <span aria-hidden="true" className="text-brand-deep">*</span>
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows={6}
                  maxLength={2000}
                  required
                  placeholder="E.g. Please add your message here."
                  value={values.message}
                  onChange={set('message')}
                  aria-invalid={errors.message ? 'true' : undefined}
                  aria-describedby={errors.message ? 'contact-message-error' : undefined}
                  className={cn(inputCls('message'), 'resize-y')}
                />
                <div className="mt-1.5 flex justify-between text-sm">
                  <span id="contact-message-error" className="font-medium text-red-700">
                    {errors.message}
                  </span>
                  <span className="text-ink-soft">{values.message.length}/2000</span>
                </div>
              </div>

              {/* Honeypot: invisible to people, irresistible to bots. */}
              <div aria-hidden="true" className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
                <label htmlFor="contact-company_website">Leave this field empty</label>
                <input
                  id="contact-company_website"
                  name="company_website"
                  type="text"
                  tabIndex={-1}
                  autoComplete="off"
                  value={values.company_website}
                  onChange={set('company_website')}
                />
              </div>
            </div>

            <div aria-live="polite" className="min-h-6">
              {status === 'error' && (
                <p role="alert" className="mt-4 flex items-start gap-2 rounded-xl bg-red-50 p-3 text-sm font-medium text-red-800">
                  <CircleAlert aria-hidden="true" className="mt-0.5 size-4 shrink-0" />
                  {serverMessage}
                </p>
              )}
            </div>

            <button
              type="submit"
              disabled={status === 'sending'}
              className="group mt-4 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-brand-deep px-8 py-3.5 font-semibold text-white transition-colors duration-300 hover:bg-night disabled:cursor-wait disabled:opacity-80 sm:w-auto"
            >
              {status === 'sending' ? (
                <>
                  <LoaderCircle aria-hidden="true" className="size-5 animate-spin" /> Sending…
                </>
              ) : (
                <>
                  Submit <Send aria-hidden="true" className="size-4 transition-transform duration-500 group-hover:-translate-y-0.5 group-hover:translate-x-1" />
                </>
              )}
            </button>
          </m.form>
        )}
      </AnimatePresence>
    </div>
  );
}
