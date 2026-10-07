import React, { useState } from 'react';
import { Gift, Heart, Sparkles, ArrowLeft, MessageCircle, Copy, Check, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { HeaderNav } from './HeaderNav';
import { Footer } from './Footer';
import smartGlassesImage from '../assets/images/smartglasses.jpeg';

type WishlistAction = 'whatsapp' | 'money';

type WishlistItem = {
  name: string;
  note?: string;
  action?: WishlistAction;
  whatsappMessage?: string;
  image: string;
};

const WHATSAPP_NUMBER = '2347043435687'; // 07043435687 in international format

const wishlistItems: WishlistItem[] = [
  {
    name: 'Prayers',
    note: 'The best kind of blessing, always appreciated. Tap to send one via WhatsApp.',
    action: 'whatsapp',
    whatsappMessage: 'Hi Lajuicy / Emmanuel! 🙏 Sending you a birthday prayer from your wishlist page 🎉',
    image:
      'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=900&q=80',
  },
  {
    name: 'Money',
    note: 'Because Why Not?. Tap for account details.',
    action: 'money',
    image:
      'https://images.unsplash.com/photo-1593672715438-d88a70629abe?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    name: 'Cake',
    note: 'For the birthday aesthetics, obviously. LMAO',
    action: 'whatsapp',
    whatsappMessage: "Hi Emmanuel! Happy birthday bro 🎉 I'd love to get you a cake!",
    image:
      'https://images.unsplash.com/photo-1559620192-032c4bc4674e?auto=format&fit=crop&w=900&q=80',
  },
  {
    name: 'Laptop',
    note: 'A reliable laptop to keep building, designing, and continuing my propmt engineering journey.',
    action: 'whatsapp',
    whatsappMessage: "Hi Emmanuel! Happy birthday bro 🎉 I'd love to get you a laptop!",
    image:
      'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=900&q=80',
  },
  {
    name: 'Phone (iPhone preferred)',
    note: 'A little upgrade would make me very happy. NGL',
    action: 'whatsapp',
    whatsappMessage: "Hi Emmanuel! Happy birthday bro 🎉 I'd love to get you an iPhone!",
    image:
      'https://images.unsplash.com/photo-1788222465515-74200def1fbd?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    name: 'Apple Watch / Smart watch',
    note: 'A very stylish way to keep time and stay on track. KEK',
    action: 'whatsapp',
    whatsappMessage: "Hi Emmanuel! Happy birthday bro 🎉 I'd love to get you an Apple Watch!",
    image:
      'https://images.unsplash.com/photo-1546868871-7041f2a55e12?auto=format&fit=crop&w=900&q=80',
  },
  {
    name: 'Smart glasses',
    note: 'Stylish eyewear with a little extra tech and a lot of cool factor.',
    action: 'whatsapp',
    whatsappMessage: "Hi Emmanuel! Happy birthday bro 🎉 I'd love to get you smart glasses!",
    image: smartGlassesImage,
  },
  {
    name: 'Perfume',
    note: 'Ungba me, My Lord.',
    action: 'whatsapp',
    whatsappMessage: "Hi Emmanuel! Happy birthday bro 🎉 I'd love to get you perfume!",
    image:
      'https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&w=900&q=80',
  },
  {
    name: 'Wireless Earbuds / Headphones',
    note: 'For music, calls, and locking in kpa while working.',
    action: 'whatsapp',
    whatsappMessage: "Hi Emmanuel! Happy birthday bro 🎉 I'd love to get you wireless earbuds!",
    image:
      'https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=900&q=80',
  },
  {
    name: 'External Monitor',
    note: 'More screen space for design and code, always welcome.',
    action: 'whatsapp',
    whatsappMessage: "Hi Emmanuel! Happy birthday bro 🎉 I'd love to get you an external monitor!",
    image:
      'https://images.unsplash.com/photo-1588200908342-23b585c03e26?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    name: 'Ergonomic Office Chair',
    note: 'Will be a very big upgrade for my little workspace and my back will thank you.',
    action: 'whatsapp',
    whatsappMessage: "Hi Emmanuel! Happy birthday bro 🎉 I'd love to get you an ergonomic office chair!",
    image:
      'https://images.unsplash.com/photo-1688578735427-994ecdea3ea4?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    name: 'Portable Charger / Power Bank',
    note: 'Always comes in handy.',
    action: 'whatsapp',
    whatsappMessage: "Hi Emmanuel! Happy birthday bro 🎉 I'd love to get you a power bank!",
    image:
      'https://images.unsplash.com/photo-1594843665794-446ce915d840?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    name: 'Itel PowerTank',
    note: 'A portable power station to keep life running when Nepa wan embarrass me.',
    action: 'whatsapp',
    whatsappMessage: "Hi Emmanuel! Happy birthday bro 🎉 I'd love to get you an Itel PowerTank!",
    image:
      'https://ng.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/25/9197814/1.jpg?1890',
  },
  {
    name: 'Bluetooth Speaker',
    note: 'For good vibes while working or relaxing.',
    action: 'whatsapp',
    whatsappMessage: "Hi Emmanuel! Happy birthday bro 🎉 I'd love to get you a Bluetooth speaker!",
    image:
      'https://images.unsplash.com/photo-1518444065439-e933c06ce9cd?auto=format&fit=crop&w=900&q=80',
  },
  {
    name: 'Money (again, lol)',
    note: 'Because who says no AGAIN? Tap for account details.',
    action: 'money',
    image:
      'https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=900&q=80',
  },
];

type BankField = { label: string; value: string };
type BankAccount = { country: string; bank: string; fields: BankField[] };

const bankAccounts: BankAccount[] = [
  {
    country: 'Nigeria',
    bank: 'Moniepoint / OPay',
    fields: [
      { label: 'Account Name', value: 'Emmanuel Olotu O' },
      { label: 'Account Number', value: '8069964725' },
    ],
  },
  {
    country: 'Nigeria',
    bank: 'UBA',
    fields: [
      { label: 'Account Name', value: 'Emmanuel Olotu O' },
      { label: 'Account Number', value: '2129567842' },
    ],
  },
  {
    country: 'United Kingdom',
    bank: 'Clear Junction Limited',
    fields: [
      { label: 'Account Name', value: 'Emmanuel Olotu' },
      { label: 'Account Number', value: '39281572' },
      { label: 'Sort Code', value: '041307' },
      { label: 'IBAN', value: 'GB02CLJU04130739281572' },
      { label: 'Bank Address', value: '16 Mortimer Street, London, W1T 3JL, United Kingdom' },
    ],
  },
  {
    country: 'United States',
    bank: 'Lead Bank',
    fields: [
      { label: 'Account Name', value: 'Emmanuel Olotu' },
      { label: 'Account Number', value: '213975992100' },
      { label: 'Account Type', value: 'Checking' },
      { label: 'Routing Number', value: '101019644' },
      { label: 'Bank Address', value: '1801 Main St. Kansas City, MO 64108, USA' },
    ],
  },
];

const CopyableField: React.FC<{ fieldId: string; label: string; value: string; copiedId: string | null; onCopy: (id: string, value: string) => void }> = ({
  fieldId,
  label,
  value,
  copiedId,
  onCopy,
}) => {
  const isCopied = copiedId === fieldId;
  return (
    <button
      type="button"
      onClick={() => onCopy(fieldId, value)}
      className="w-full flex items-center justify-between gap-3 text-left border-b border-neutral-200/80 dark:border-neutral-800 pb-2 last:border-b-0 last:pb-0 group"
    >
      <span className="text-sm text-neutral-700 dark:text-neutral-200 font-medium">
        <span className="text-neutral-400 dark:text-neutral-500 font-normal">{label}: </span>
        {value}
      </span>
      {isCopied ? (
        <span className="text-emerald-600 dark:text-emerald-400 text-[11px] font-semibold flex items-center gap-1 shrink-0">
          <Check className="w-3.5 h-3.5" /> Copied
        </span>
      ) : (
        <Copy className="w-3.5 h-3.5 text-neutral-400 dark:text-neutral-500 group-hover:text-neutral-700 dark:group-hover:text-neutral-200 shrink-0" />
      )}
    </button>
  );
};

export const WishlistPage: React.FC = () => {
  const [isMoneyModalOpen, setIsMoneyModalOpen] = useState(false);
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const handleCopy = (id: string, value: string) => {
    navigator.clipboard.writeText(value);
    setCopiedId(id);
    setTimeout(() => setCopiedId((current) => (current === id ? null : current)), 2000);
  };

  const handleItemClick = (item: WishlistItem) => {
    if (item.action === 'whatsapp' && item.whatsappMessage) {
      const link = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(item.whatsappMessage)}`;
      window.open(link, '_blank', 'noopener,noreferrer');
    } else if (item.action === 'money') {
      setIsMoneyModalOpen(true);
    }
  };

  return (
    <div className="min-h-screen bg-[#fafaf8] dark:bg-[#0d0d0f] text-neutral-900 dark:text-neutral-100 font-['Plus_Jakarta_Sans',sans-serif] selection:bg-orange-500 selection:text-white transition-colors duration-300">
      <HeaderNav
        onOpenContactModal={() => {}}
        onBookCallClick={() => {}}
        activeSection="Home"
      />

      <main className="w-full pt-8 sm:pt-12 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <section className="rounded-[32px] border border-neutral-200/80 dark:border-neutral-800 bg-white/80 dark:bg-neutral-950/60 backdrop-blur-sm shadow-[0_20px_60px_rgba(0,0,0,0.04)] px-5 sm:px-8 lg:px-10 py-8 sm:py-10 lg:py-12">
            <div className="flex flex-col gap-6">
              <div className="flex items-center justify-between gap-3 flex-wrap">
                <div className="inline-flex items-center gap-2 rounded-full bg-rose-100 dark:bg-rose-900/30 border border-rose-200/80 dark:border-rose-800/50 px-3 py-1.5 text-[10px] sm:text-xs font-semibold uppercase tracking-[0.18em] text-rose-700 dark:text-rose-300">
                  <Sparkles className="w-3.5 h-3.5" />
                  Birthday fun
                </div>

                <Link
                  to="/"
                  className="inline-flex items-center gap-2 text-xs sm:text-sm font-medium text-neutral-600 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white transition-colors"
                >
                  <ArrowLeft className="w-4 h-4" />
                  Back home
                </Link>
              </div>

              <div className="space-y-4">
                <h1 className="text-4xl sm:text-5xl lg:text-7xl font-['Instrument_Serif',serif] font-normal tracking-tight text-neutral-900 dark:text-white leading-none">
                  My Birthday Wishlist 🎉
                </h1>
                <p className="max-w-3xl text-sm sm:text-base lg:text-lg text-neutral-600 dark:text-neutral-300 leading-relaxed">
                  This is my fun, informal birthday wishlist — a little collection of things that would make me smile, feel celebrated, and help make this year even sweeter. No pressure, no expectations, just joy.
                </p>
              </div>
            </div>
          </section>

          <section className="mt-8 sm:mt-10 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
            {wishlistItems.map((item, index) => {
              const isActionable = Boolean(item.action);

              const cardContent = (
                <>
                  <div className="overflow-hidden rounded-[22px] mb-4">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="h-52 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>

                  <div className="mb-4 flex items-center justify-between gap-3">
                    <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-neutral-400 dark:text-neutral-500">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                  </div>

                  <h2 className="text-xl sm:text-2xl font-['Instrument_Serif',serif] font-normal tracking-tight text-neutral-900 dark:text-white mb-2">
                    {item.name}
                  </h2>

                  <p className="text-sm sm:text-[15px] leading-relaxed text-neutral-600 dark:text-neutral-300">
                    {item.note || 'A little surprise would be lovely.'}
                  </p>

                  {isActionable && (
                    <span className="inline-block mt-3 text-[11px] font-semibold uppercase tracking-wider text-amber-700 dark:text-amber-400">
                      Tap to open →
                    </span>
                  )}
                </>
              );

              const baseClasses =
                'group rounded-[28px] border border-neutral-200/80 dark:border-neutral-800 bg-white dark:bg-neutral-900 p-4 sm:p-5 shadow-[0_10px_28px_rgba(0,0,0,0.03)] transition-all duration-300 text-left w-full overflow-hidden';

              if (isActionable) {
                return (
                  <button
                    key={`${item.name}-${index}`}
                    type="button"
                    onClick={() => handleItemClick(item)}
                    className={`${baseClasses} hover:-translate-y-1 hover:shadow-[0_18px_42px_rgba(0,0,0,0.06)] cursor-pointer`}
                  >
                    {cardContent}
                  </button>
                );
              }

              return (
                <article key={`${item.name}-${index}`} className={baseClasses}>
                  {cardContent}
                </article>
              );
            })}
          </section>

          <section className="mt-8 sm:mt-10">
            <div className="rounded-[28px] border border-dashed border-amber-300/80 dark:border-amber-700/70 bg-amber-50/80 dark:bg-amber-950/20 px-4 py-4 sm:px-6 sm:py-5 text-center text-sm sm:text-base text-amber-900 dark:text-amber-200">
              No prices listed on purpose — I don't want to limit anyone's generosity 😄
            </div>
          </section>

          <section id="send-money" className="mt-10 sm:mt-12 rounded-[32px] border border-neutral-200/80 dark:border-neutral-800 bg-[#f8f7f5] dark:bg-neutral-950/70 p-5 sm:p-8 lg:p-10 shadow-[0_12px_30px_rgba(0,0,0,0.03)]">
            <div className="flex items-center gap-3 mb-6">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300">
                <Heart className="w-5 h-5" />
              </div>
              <div>
                <p className="text-[10px] sm:text-xs font-semibold uppercase tracking-[0.18em] text-neutral-400 dark:text-neutral-500">
                  Gift vibe
                </p>
                <h2 className="text-2xl sm:text-4xl font-['Instrument_Serif',serif] font-normal tracking-tight text-neutral-900 dark:text-white">
                  Send Money
                </h2>
              </div>
            </div>

            <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-300 leading-relaxed max-w-2xl mb-8">
              If you'd like to bless me in the easiest way possible, here are the accounts to keep in mind. Tap any line to copy it — no pressure, just love and generosity.
            </p>

            <div className="grid gap-5 lg:grid-cols-2">
              {bankAccounts.map((account, accIdx) => (
                <div
                  key={`${account.country}-${account.bank}`}
                  className="rounded-[24px] border border-neutral-200/80 dark:border-neutral-800 bg-white dark:bg-neutral-900 p-5 shadow-[0_8px_24px_rgba(0,0,0,0.02)]"
                >
                  <div className="mb-4 flex items-center justify-between gap-3">
                    <div>
                      <h3 className="text-xl font-bold text-neutral-900 dark:text-white">{account.country}</h3>
                      <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-0.5">{account.bank}</p>
                    </div>
                    <span className="rounded-full bg-neutral-100 dark:bg-neutral-800 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-neutral-500 dark:text-neutral-400 shrink-0">
                      {accIdx === 0 || accIdx === 1 ? 'Local' : 'International'}
                    </span>
                  </div>

                  <div className="space-y-3">
                    {account.fields.map((field) => (
                      <CopyableField
                        key={`${account.country}-${account.bank}-${field.label}`}
                        fieldId={`${account.country}-${account.bank}-${field.label}`}
                        label={field.label}
                        value={field.value}
                        copiedId={copiedId}
                        onCopy={handleCopy}
                      />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>

      <div className="-mx-4 sm:-mx-6 lg:-mx-8">
        <Footer
          onBookCallClick={() => {}}
          onOpenContactModal={() => {}}
        />
      </div>

      {/* Money Modal — triggered by tapping a "Money" wishlist card */}
      {isMoneyModalOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/50 backdrop-blur-xs flex items-center justify-center p-4 animate-in fade-in duration-200"
          onClick={() => setIsMoneyModalOpen(false)}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-white dark:bg-neutral-900 rounded-3xl p-6 sm:p-8 max-w-lg w-full shadow-2xl border border-neutral-100 dark:border-neutral-800 relative animate-in zoom-in-95 duration-200 max-h-[85vh] overflow-y-auto"
          >
            <button
              onClick={() => setIsMoneyModalOpen(false)}
              className="absolute top-5 right-5 w-9 h-9 rounded-full bg-neutral-100 hover:bg-neutral-200 dark:bg-neutral-800 dark:hover:bg-neutral-700 flex items-center justify-center text-neutral-600 dark:text-neutral-300 transition-colors"
            >
              <X className="w-4 h-4" />
            </button>

            <h3 className="text-2xl font-bold text-neutral-900 dark:text-white tracking-tight mb-1">
              Send a Little Joy 💸
            </h3>
            <p className="text-xs sm:text-sm text-neutral-500 dark:text-neutral-400 mb-6">
              Tap any detail below to copy it.
            </p>

            <div className="space-y-4">
              {bankAccounts.map((account, accIdx) => (
                <div
                  key={`modal-${account.country}-${account.bank}`}
                  className="rounded-2xl border border-neutral-200/80 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-800/60 p-4"
                >
                  <div className="flex items-center justify-between gap-3 mb-3">
                    <div>
                      <h4 className="text-sm font-bold text-neutral-900 dark:text-white">{account.country}</h4>
                      <p className="text-[11px] text-neutral-500 dark:text-neutral-400">{account.bank}</p>
                    </div>
                    <span className="rounded-full bg-white dark:bg-neutral-900 px-2 py-0.5 text-[9px] font-semibold uppercase tracking-wider text-neutral-500 dark:text-neutral-400 shrink-0">
                      {accIdx === 0 || accIdx === 1 ? 'Local' : 'International'}
                    </span>
                  </div>
                  <div className="space-y-2">
                    {account.fields.map((field) => (
                      <CopyableField
                        key={`modal-${account.country}-${account.bank}-${field.label}`}
                        fieldId={`modal-${account.country}-${account.bank}-${field.label}`}
                        label={field.label}
                        value={field.value}
                        copiedId={copiedId}
                        onCopy={handleCopy}
                      />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};