import { ReactNode } from "react";

export interface BlueprintSection {
  id: string;
  title: string;
  icon: string;
  content: ReactNode;
}

export const blueprintData: BlueprintSection[] = [
  {
    id: "vision",
    title: "1. Executive Brand Vision",
    icon: "Crown",
    content: (
      <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
        <div>
          <h3 className="text-2xl font-serif text-gold-500 mb-4 border-b border-white/10 pb-2">Brand Positioning</h3>
          <p className="text-white/80 leading-relaxed font-light">
            "قهوة أبوصالح" operates at the absolute zenith of Arabic coffee culture. We are not a commodity; we are a custodian of heritage. Positioned between hyper-modern luxury and ancestral Bedouin/Levantine hospitality, the brand commands a premium price point justified by uncompromising quality, masterful roasting science, and an unyielding commitment to the aesthetic rituals of Middle Eastern coffee gathering.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="glass-panel p-6 rounded-xl">
            <h4 className="text-lg font-serif text-white mb-2">Primary Persona: "The Discerning Host"</h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li><span className="text-gold-400">•</span> Demographics: 30-55, High Net Worth, GCC & Levant expats globally.</li>
              <li><span className="text-gold-400">•</span> Psychographics: Values prestige, tradition, and showcasing ultimate hospitality to guests.</li>
              <li><span className="text-gold-400">•</span> Trigger: Seeking the definitive authentic taste that cannot be found in commercial chains.</li>
            </ul>
          </div>
          <div className="glass-panel p-6 rounded-xl">
            <h4 className="text-lg font-serif text-white mb-2">Secondary Persona: "The Cultured Modernist"</h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li><span className="text-gold-400">•</span> Demographics: 22-35, Urban Professionals, Culturally proud.</li>
              <li><span className="text-gold-400">•</span> Psychographics: Aesthetic-driven, values ethical sourcing, Instagram-first visual standards.</li>
              <li><span className="text-gold-400">•</span> Trigger: Wants specialty-grade coffee with roots; desires "heritage in a modern cup."</li>
            </ul>
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-serif text-gold-500 mb-4 border-b border-white/10 pb-2">Emotional Identity & Voice</h3>
          <p className="text-white/80 leading-relaxed font-light mb-4">
            <strong className="text-white">Arabic Voice (نبرة الصوت):</strong> Poetic, unconditionally welcoming, steeped in classical vocabulary but delivered with modern minimalism. Uses terms like "أصالة" (Authencity), "كرم" (Generosity), and "إرث" (Legacy).<br/><br/>
            <strong className="text-white">English Voice:</strong> Sophisticated, cinematic, educational but never pedantic. We speak like a prestigious gallery curator explaining a masterpiece.
          </p>
        </div>
      </div>
    ),
  },
  {
    id: "architecture",
    title: "2. Website Architecture",
    icon: "Sitemap",
    content: (
      <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
        <div>
          <h3 className="text-2xl font-serif text-gold-500 mb-4 border-b border-white/10 pb-2">Sitemap & Flow Mastery</h3>
          <p className="text-white/80 font-light mb-6">
            The architecture is designed to lead the user through a narrative arc: Discovery → Education → Desire → Transaction → Retention.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="glass-panel p-5 rounded-lg border-l-2 border-l-gold-500">
              <h4 className="font-serif text-lg mb-2">Top-Level Navigation (Mega Menu)</h4>
              <ul className="text-sm text-white/70 space-y-1">
                <li>• <strong>Shop (تسوق):</strong> Arabic Blends, Single Origins, Limited Micro-Lots, Dallahs & Accessories.</li>
                <li>• <strong>Heritage (إرثنا):</strong> The Story, The Roasting Science, Culture of the Majlis.</li>
                <li>• <strong>Wholesale (شراكات بنيّة):</strong> Cafe Partnerships, Corporate Gifting.</li>
                <li>• <strong>Diwan Club (الديوان):</strong> VIP Loyalty & Subscriptions.</li>
              </ul>
            </div>
            <div className="glass-panel p-5 rounded-lg border-l-2 border-l-white/20">
              <h4 className="font-serif text-lg mb-2">Utility & Conversion Nodes</h4>
              <ul className="text-sm text-white/70 space-y-1">
                <li>• Sticky Dual-Language Toggle (Ar/En).</li>
                <li>• Dynamic Cart Drawer (Slides from leading edge based on RTL/LTR).</li>
                <li>• Floating WhatsApp VIP Concierge.</li>
                <li>• Omnipresent Store Locator (Find us in Riyadh, Amman, Dubai, London).</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: "homepage",
    title: "3. Homepage Blueprint",
    icon: "Home",
    content: (
      <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
        <div className="space-y-6">
          <div className="bg-white/5 border border-gold-500/30 p-6 rounded-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gold-500/10 blur-3xl rounded-full"></div>
            <h4 className="text-gold-500 font-serif text-xl mb-2">1. The Cinematic Hero</h4>
            <p className="text-white/80 text-sm mb-3"><strong>Visual:</strong> Slow-motion 4K background video. Golden Arabic coffee cascading from a brass Dallah into a traditional Finjaan. Subdued background lighting, sharp focus on the steam and golden crema. WebGL particle overlay representing roasting embers.</p>
            <p className="text-white/80 text-sm mb-3"><strong>Copy:</strong> "تاريخ يُصب في فنجان" / "History Poured into a Cup."</p>
            <p className="text-white/80 text-sm"><strong>UX:</strong> Zero-scroll required to see primary CTA (Shop Fresh Roasts) and secondary Ghost CTA (Watch Our Story). Downward chevron pulsing natively at the bottom.</p>
          </div>

          <div className="glass-panel p-6 rounded-xl">
            <h4 className="text-white font-serif text-xl mb-2">2. The Origin Carousel (Product Discovery)</h4>
            <p className="text-white/70 text-sm">A drag-to-scroll horizontal array of our signature blends. Cards are glassmorphic. Hovering reveals flavor notes (e.g., Cardamom, Saffron, Dates) appearing as floating particles. 1-click "Add to Cart" directly on the card to minimize friction.</p>
          </div>

          <div className="glass-panel p-6 rounded-xl">
            <h4 className="text-white font-serif text-xl mb-2">3. The Artisanal Divide (Split Screen Layout)</h4>
            <p className="text-white/70 text-sm"><strong>Left:</strong> The Roaster's Hands (Gritty, passionate, traditional). <strong>Right:</strong> Modern Luxury Presentation (The final packaged product in a high-end setting). Communicates "Rooted in tradition, delivered in luxury."</p>
          </div>

          <div className="glass-panel p-6 rounded-xl">
            <h4 className="text-white font-serif text-xl mb-2">4. Social Proof & Prestige</h4>
            <p className="text-white/70 text-sm">Live, rotating unboxing videos from elite customers via Instagram/TikTok integration. Asymmetric grid layout. "Trusted by over 50,000 households across the GCC."</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: "designsystem",
    title: "4. UI/UX Design System",
    icon: "Paintbrush",
    content: (
      <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
        <p className="text-white/80 font-light text-lg">Every pixel must exude the scent of freshly ground cardamom and the weight of a brass Dallah.</p>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="h-24 bg-[#0A0A0A] border border-white/20 rounded-lg flex items-end p-3"><span className="text-xs text-white/50">Onyx Backrop<br/>#0A0A0A</span></div>
          <div className="h-24 bg-[#D4AF37] border border-white/20 rounded-lg flex items-end p-3"><span className="text-xs text-black/70 font-semibold">Antique Gold<br/>#D4AF37</span></div>
          <div className="h-24 bg-[#3E2723] border border-white/20 rounded-lg flex items-end p-3"><span className="text-xs text-white/70">Roasted Mocha<br/>#3E2723</span></div>
          <div className="h-24 bg-[#FBF9F6] border border-white/20 rounded-lg flex items-end p-3"><span className="text-xs text-black/70">Parchment<br/>#FBF9F6</span></div>
        </div>

        <div className="space-y-4">
          <h4 className="text-xl font-serif text-gold-500">Typography Engine</h4>
          <div className="glass-panel p-4 rounded-lg flex justify-between items-center bg-white/5">
            <div>
              <p className="font-serif text-2xl text-white">Amiri / Playfair Display</p>
              <p className="text-xs text-white/50">H1, H2, Quotes, Emphasized brand names</p>
            </div>
            <span className="text-4xl text-gold-500 font-serif">قهوة</span>
          </div>
          <div className="glass-panel p-4 rounded-lg flex justify-between items-center bg-white/5">
            <div>
              <p className="font-sans text-xl text-white">Inter / Noto Kufi Arabic</p>
              <p className="text-xs text-white/50">Body copy, UI elements, Buttons, Metadata</p>
            </div>
            <span className="text-lg text-gold-500 font-sans tracking-wide">ABUSALEH</span>
          </div>
        </div>

        <div>
          <h4 className="text-xl font-serif text-gold-500 mb-3">Interaction Psychology</h4>
          <ul className="space-y-3 text-white/80 text-sm">
            <li><strong className="text-white">Motion:</strong> "Liquid gold" easing parameters. Transitions should take 600ms-800ms using Bézier curves (0.25, 1, 0.5, 1) to feel exceptionally unhurried and luxurious.</li>
            <li><strong className="text-white">Hover States:</strong> Subtle lift (Y: -2px) combined with a soft gold diffuse shadow. Images scale to 1.05x inside fixed containers to create depth.</li>
            <li><strong className="text-white">Skeuomorphism:</strong> Buttons have a faint inner top-border of white/20 to mimic a physical premium glass key.</li>
          </ul>
        </div>
      </div>
    ),
  },
  {
    id: "products",
    title: "5. Products Portfolio",
    icon: "Coffee",
    content: (
      <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
        <p className="text-white/80 font-light text-lg mb-6">Our product collection reflects uncompromising quality, curated carefully for the discerning host.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="glass-panel p-6 rounded-xl border-t-2 border-gold-500">
            <h4 className="text-white font-serif text-xl mb-2 flex items-center gap-2">
              <span className="text-gold-500">◆</span> Signature Blends (خلطاتنا الخاصة)
            </h4>
            <p className="text-white/60 text-sm mb-4">The core of our brand, capturing regional authenticities with precise roasting.</p>
            <ul className="space-y-3 text-sm text-white/80">
              <li><strong>The Najdi Roast (النجدية):</strong> Light blond roast, heavily spiced with premium Indian cardamom and Spanish saffron.</li>
              <li><strong>The Levantine Dark (الشامية):</strong> Darker, richer profile, infused with finely ground cardamom. Perfect for boiling.</li>
              <li><strong>The Royal Emirates (الإماراتية الملكية):</strong> Medium roast featuring a subtle hint of cloves and rose water.</li>
            </ul>
          </div>

          <div className="glass-panel p-6 rounded-xl border-t-2 border-[#D4AF37]/70">
            <h4 className="text-white font-serif text-xl mb-2 flex items-center gap-2">
              <span className="text-gold-500">◆</span> Single Origins (محاصيل فردية المصدر)
            </h4>
            <p className="text-white/60 text-sm mb-4">Unblended, pure micro-lots for the modern specialty coffee connoisseur.</p>
            <ul className="space-y-3 text-sm text-white/80">
              <li><strong>Yemen Haraz (حراز اليمن):</strong> Deep fruit notes, wild berry, and wine-like acidity. Highly limited.</li>
              <li><strong>Ethiopia Yirgacheffe (يرقاتشيف إثيوبيا):</strong> Floral, jasmine aroma with bright citrus notes.</li>
              <li><strong>Colombia Gesha (كولومبيا قيشا):</strong> The pinnacle of specialty beans, reserved for V60 and Chemex enthusiasts.</li>
            </ul>
          </div>

          <div className="glass-panel p-6 rounded-xl border-t-2 border-white/30">
            <h4 className="text-white font-serif text-xl mb-2 flex items-center gap-2">
              <span className="text-gold-500">◆</span> Luxury Accessories (إكسسوارات فاخرة)
            </h4>
            <p className="text-white/60 text-sm mb-4">The vessels of hospitality. Hand-crafted and strictly premium.</p>
            <ul className="space-y-3 text-sm text-white/80">
              <li><strong>The Heirloom Dallah (دلة الإرث):</strong> Solid brass, handcrafted in Damascus and engraved with Kufic calligraphy.</li>
              <li><strong>Gold-Rimmed Finjaans (فناجين مذهبة):</strong> Delicate porcelain cups with 24k gold rims, sold in sets of 6 and 12.</li>
              <li><strong>Precision Hand Grinders:</strong> Timeless metallic grinders equipped with German burrs for the exact Arabic coffee micron-level grind.</li>
            </ul>
          </div>

          <div className="glass-panel p-6 rounded-xl border-t-2 border-white/10">
            <h4 className="text-white font-serif text-xl mb-2 flex items-center gap-2">
              <span className="text-gold-500">◆</span> VIP Gifting & Bundles (هدايا ومجموعات)
            </h4>
            <p className="text-white/60 text-sm mb-4">Curated for corporate gifting, weddings, and premium Eid presentations.</p>
            <ul className="space-y-3 text-sm text-white/80">
              <li><strong>The Majlis Chest (صندوق المجلس):</strong> Velvet-lined wooden chest containing 3 blends, a Dallah, and a dozen dates.</li>
              <li><strong>Ramadan Crescent Box (صندوق هلال رمضان):</strong> Featuring exclusive seasonal roasts designed to pair perfectly with Iftar sweets.</li>
              <li><strong>The Diwan Starter Set:</strong> An introductory luxurious kit for new connoisseurs.</li>
            </ul>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: "ecommerce",
    title: "6. Ecommerce Experience",
    icon: "ShoppingCart",
    content: (
      <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
        <h3 className="text-2xl font-serif text-gold-500 border-b border-white/10 pb-2">The Frictionless Luxury Cart</h3>
        
        <div className="glass-panel p-6 rounded-xl border-l-4 border-l-gold-500">
          <h4 className="font-serif text-lg mb-2">Product Detail Page (PDP) Subversion</h4>
          <p className="text-sm text-white/70 mb-4">Instead of standard generic grids, the PDP feels like an editorial magazine feature. Large, bleeding-edge photography.</p>
          <ul className="text-sm text-white/80 space-y-2 list-disc list-inside">
            <li><strong>Taste Radar:</strong> Interactive SVG web spider chart mapping Acidity, Body, Sweetness, and Spices.</li>
            <li><strong>The "Perfect Serve" Selector:</strong> Dynamic dropdown altering cart logic based on whether they brew with a Dallah, Espresso, or V60.</li>
            <li><strong>Roast Schedule urgency:</strong> "Next Roast: Tuesday. Order within 14h 22m to make the batch."</li>
          </ul>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="glass-panel p-5 rounded-lg">
            <h4 className="font-serif text-gold-400 mb-2">Slide-out Cart UX</h4>
            <p className="text-sm text-white/70">
              The cart drawer includes a dynamic progress bar for "Free Express Shipping." Below the items, an AI-powered "Perfect Pairing" section suggests Dates or Sweets natively, added with a single tap.
            </p>
          </div>
          <div className="glass-panel p-5 rounded-lg">
            <h4 className="font-serif text-gold-400 mb-2">Checkout Flow</h4>
            <p className="text-sm text-white/70">
              1-page checkout bypassing Shopify's default via Storefront API. Native integrations for Apple Pay, Google Pay, Mada (Saudi), and Tabby/Tamara (BNPL) presented seamlessly.
            </p>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: "conversion",
    title: "7. Conversion Strategy",
    icon: "TrendingUp",
    content: (
      <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
        <p className="text-white/80 font-light mb-4 text-lg">We optimize for emotion, which drives transaction. High AOV (Average Order Value) is achieved through perceived value engineering.</p>

        <div className="space-y-4">
          <div className="bg-[#111] p-5 rounded-lg border border-white/5 flex gap-4">
            <div className="w-12 h-12 rounded-full bg-gold-500/20 flex items-center justify-center shrink-0">
              <span className="text-gold-500 font-bold">1</span>
            </div>
            <div>
              <h4 className="text-white font-serif text-lg">The Scarcity Loop</h4>
              <p className="text-white/60 text-sm mt-1">Micro-lots are labeled with actual remaining bag counts: "Only 43 bags left from the Yemen Haraz allocation." This transforms coffee from a grocery item to a collectible.</p>
            </div>
          </div>

          <div className="bg-[#111] p-5 rounded-lg border border-white/5 flex gap-4">
            <div className="w-12 h-12 rounded-full bg-gold-500/20 flex items-center justify-center shrink-0">
              <span className="text-gold-500 font-bold">2</span>
            </div>
            <div>
              <h4 className="text-white font-serif text-lg">Subscription Architecture</h4>
              <p className="text-white/60 text-sm mt-1">"Never run out of hospitality." The subscription tier is framed not as auto-ship, but as the "Abu Saleh Diwan" membership. Subscribers get early access to Eid blends and reserved stocks.</p>
            </div>
          </div>

          <div className="bg-[#111] p-5 rounded-lg border border-white/5 flex gap-4">
            <div className="w-12 h-12 rounded-full bg-gold-500/20 flex items-center justify-center shrink-0">
              <span className="text-gold-500 font-bold">3</span>
            </div>
            <div>
              <h4 className="text-white font-serif text-lg">WhatsApp Cart Recovery</h4>
              <p className="text-white/60 text-sm mt-1">Abandoning a cart triggers a highly personalized, polite WhatsApp message in Arabic 30 minutes later from a "Coffee Concierge" offering assistance with blend selection, not just a generic discount code.</p>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: "techstack",
    title: "8. Technical Architecture",
    icon: "Cpu",
    content: (
      <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
        <p className="text-white/80 font-light">A monolithic ecommerce platform will not deliver the 95+ Lighthouse scores required for mobile luxury. We mandate a Composable (Headless) Architecture.</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
          <div className="glass-panel p-6 rounded-xl border-t-2 border-gold-500">
            <h4 className="text-gold-400 font-mono text-sm mb-4 tracking-widest uppercase">Frontend Edge</h4>
            <ul className="space-y-3 text-white/80 text-sm">
              <li><strong>Framework:</strong> Next.js (React 18, App Router)</li>
              <li><strong>Styling:</strong> Tailwind CSS + Framer Motion</li>
              <li><strong>Hosting:</strong> Vercel Edge Network</li>
              <li><strong>RTL Engine:</strong> Stylis RTL plugin / Native CSS logical properties</li>
            </ul>
          </div>
          
          <div className="glass-panel p-6 rounded-xl border-t-2 border-[#10B981]">
            <h4 className="text-[#10B981] font-mono text-sm mb-4 tracking-widest uppercase">Commerce Core</h4>
            <ul className="space-y-3 text-white/80 text-sm">
              <li><strong>Engine:</strong> Shopify Plus Headless (Storefront API v2024-01)</li>
              <li><strong>Auth:</strong> Shopify Multipass / Auth.js</li>
              <li><strong>Payments:</strong> Stripe + Checkout.com (Middle East focus)</li>
            </ul>
          </div>

          <div className="glass-panel p-6 rounded-xl border-t-2 border-[#F43F5E]">
            <h4 className="text-[#F43F5E] font-mono text-sm mb-4 tracking-widest uppercase">Content Matrix</h4>
            <ul className="space-y-3 text-white/80 text-sm">
              <li><strong>CMS:</strong> Sanity.io (Provides real-time collaboration & deep Arabic localization schemas)</li>
              <li><strong>Assets:</strong> Cloudinary (Auto format to AVIF/WebP + on-the-fly RTL image flipping if needed)</li>
            </ul>
          </div>

          <div className="glass-panel p-6 rounded-xl border-t-2 border-[#3B82F6]">
            <h4 className="text-[#3B82F6] font-mono text-sm mb-4 tracking-widest uppercase">Data & Analytics</h4>
            <ul className="space-y-3 text-white/80 text-sm">
              <li><strong>Tracking:</strong> Segment -&gt; GA4 &amp; Mixpanel</li>
              <li><strong>UX Insights:</strong> PostHog (Session recordings optimized for SPA)</li>
              <li><strong>Search:</strong> Algolia (Typo-tolerant Arabic/English full-text search)</li>
            </ul>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: "seo",
    title: "9. SEO Strategy",
    icon: "Search",
    content: (
      <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
        <h3 className="text-2xl font-serif text-gold-500 border-b border-white/10 pb-2">Internationalized SEO Matrix</h3>
        
        <p className="text-white/80 font-light text-sm">We must dominate both English ("Premium Arabic Coffee Roasters") and Arabic ("أفضل قهوة عربية مختصة") search spaces through meticulous technical implementation.</p>

        <div className="space-y-4">
          <div className="glass-panel p-4 rounded-lg">
            <h4 className="font-serif text-white text-lg mb-1">1. Hreflang & Sub-directory Architecture</h4>
            <p className="text-white/60 text-sm">Use <code>abusaleh.com/ar-sa/</code> for Saudi Arabia Arabic, <code>abusaleh.com/en-ae/</code> for UAE English. Strict <code>&lt;link rel="alternate" hreflang="x"&gt;</code> mapping to prevent duplicate content penalties across GCC domains.</p>
          </div>
          
          <div className="glass-panel p-4 rounded-lg">
            <h4 className="font-serif text-white text-lg mb-1">2. Advanced Schema Markup (JSON-LD)</h4>
            <p className="text-white/60 text-sm">Deploy <code>Product</code> schema with aggregate ratings, precise roasting dates, and origin data. Deploy <code>Article</code> and <code>Recipe</code> markup for the "Brewing Education" sections to capture "How to make Arabic Coffee at home" rich snippets.</p>
          </div>

          <div className="glass-panel p-4 rounded-lg">
            <h4 className="font-serif text-white text-lg mb-1">3. Arabic Long-Tail Capture</h4>
            <p className="text-white/60 text-sm">Optimize for semantics, not exact matches. Arabic searchers use various spellings (قهوة مختصة vs القهوة المختصة). The CMS taxonomy must include aliases to capture phonetic variations and dialect differences (e.g., Qahwa, Gahwa, Kahwa).</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: "performance",
    title: "10. Performance Optimization",
    icon: "Zap",
    content: (
      <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
        <div className="bg-gradient-to-r from-gold-500/10 to-transparent p-6 rounded-xl border border-gold-500/20">
          <h3 className="text-2xl font-serif text-gold-500 mb-2">The Sub-2-Second Imperative</h3>
          <p className="text-white/80 font-light text-sm mb-4">Luxury experiences cannot buffer. Every millisecond of delay degrades brand prestige and cart conversion.</p>
          
          <ul className="space-y-4 text-sm text-white/90">
            <li className="flex items-start gap-3">
              <span className="text-gold-500 font-bold">01.</span>
              <div>
                <strong>Next.js App Router & React Server Components:</strong> HTML is streamed instantly from Edge nodes (Dubai, Bahrain AWS zones) before client-side hydration begins. Zero layout shift (CLS).
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-gold-500 font-bold">02.</span>
              <div>
                <strong>Arabic Typeface Splitting:</strong> Large Arabic font files (e.g., Noto Kufi) are subsetted. We strip unused glyphs and deliver via <code>.woff2</code> with <code>font-display: swap</code> to guarantee immediate text painted on screen.
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-gold-500 font-bold">03.</span>
              <div>
                <strong>Video/Asset Delivery:</strong> Cinematic hero backgrounds are not hosted locally. They are streamed via Mux or Cloudflare Stream, utilizing HLS adaptive bitrate streaming based on the user's 5G/4G connection.
              </div>
            </li>
          </ul>
        </div>
      </div>
    ),
  },
  {
    id: "marketing",
    title: "11. Content & Marketing",
    icon: "Megaphone",
    content: (
      <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
        <p className="text-white/80 font-light text-lg mb-4">"We don't sell beans; we sell the prestige of the pour."</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="glass-panel p-5 rounded-lg border-t border-t-white/10">
            <h4 className="text-white font-serif text-lg mb-2">Social Aesthetic (TikTok/IG Reels)</h4>
            <p className="text-white/60 text-sm">ASMR-focused content. The crack of the roast. The pouring of the liquid gold. Close-ups of saffron threads. Minimal text, high-end audio design. We partner with luxury lifestyle architecture influencers in Riyadh and Dubai, placing Abu Saleh bags in multi-million dollar Majlis settings.</p>
          </div>
          
          <div className="glass-panel p-5 rounded-lg border-t border-t-white/10">
            <h4 className="text-white font-serif text-lg mb-2">Seasonal Tentpoles</h4>
            <p className="text-white/60 text-sm"><strong>Ramadan:</strong> The website shifts to a "Nights" aesthetic (darker, crescent motifs). Custom Ramadan gifting boxes launch 3 weeks prior.<br/><strong>Eid:</strong> Focus on "Eidiya" hospitality bundles.<br/><strong>National Day:</strong> Limited edition green/gold packaging, patriotic but deeply elegant storytelling.</p>
          </div>
          
          <div className="glass-panel p-5 rounded-lg md:col-span-2 border-t border-t-gold-500/50">
            <h4 className="text-gold-400 font-serif text-lg mb-2">Email & SMS Lifecycle</h4>
            <p className="text-white/60 text-sm">Post-purchase flow: Not just tracking numbers. We send an SMS: "Your coffee is resting dynamically. It will be at peak flavor in 4 days when it arrives." Email 2: A beautiful PDF guide on brewing the specific blend they bought. Email 3 (Day 25): "Time to replenish your Majlis."</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: "loyalty",
    title: "12. Loyalty & Rewards",
    icon: "Gift",
    content: (
      <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
        <h3 className="text-2xl font-serif text-gold-500 border-b border-white/10 pb-2">"The Diwan" (الديوان) Ecosystem</h3>
        
        <p className="text-white/80 font-light text-sm mb-4">Standard points programs feel cheap. "The Diwan" is modeled after airline status and private member clubs.</p>

        <div className="space-y-4 relative">
          <div className="absolute left-4 top-4 bottom-4 w-px bg-white/10"></div>
          
          <div className="relative pl-10">
            <div className="absolute left-[13px] top-1.5 w-2 h-2 rounded-full bg-white/30"></div>
            <h4 className="text-white font-serif">Tier 1: Guest (ضيف)</h4>
            <p className="text-white/50 text-sm">Entry level. Receives standard dispatches and access to general store.</p>
          </div>
          
          <div className="relative pl-10">
            <div className="absolute left-[13px] top-1.5 w-2 h-2 rounded-full bg-gold-400/50 shadow-[0_0_10px_rgba(212,175,55,0.5)]"></div>
            <h4 className="text-gold-400 font-serif">Tier 2: Host (مُضيف)</h4>
            <p className="text-white/50 text-sm">Unlocked at $500 annual spend. Free GCC expedited shipping. Early access (24hrs) to micro-lot drops.</p>
          </div>
          
          <div className="relative pl-10">
            <div className="absolute left-[13px] top-1.5 w-2 h-2 rounded-full bg-white shadow-[0_0_15px_rgba(255,255,255,0.8)]"></div>
            <h4 className="text-white font-serif">Tier 3: The Elder (الشيخ / شيخ المجلس)</h4>
            <p className="text-white/50 text-sm">Invite-only or $2,500+ annual spend. Concierge WhatsApp ordering line. Dedicated personalized roasts (client name laser-etched onto tins). Exclusive tasting invites in Riyadh/Amman pop-ups.</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: "ai",
    title: "13. AI & Smart Features",
    icon: "Bot",
    content: (
      <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
        <div className="glass-panel p-8 rounded-2xl relative overflow-hidden">
          <div className="absolute -right-10 -top-10 text-9xl text-white/5 opacity-20"><svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg></div>
          
          <h3 className="text-2xl font-serif text-white mb-6 relative z-10">Invisible Intelligence</h3>
          
          <div className="space-y-6 relative z-10">
            <div>
              <h4 className="text-gold-500 font-serif text-lg mb-1">The Coffee Sommelier Quiz</h4>
              <p className="text-white/70 text-sm">An interactive onboarding flow utilizing Vercel AI SDK. Under the hood, it maps user preferences (spice tolerance, preferred intensity, brewing apparatus) to a vector database, recommending the most statistically perfect blend via RAG (Retrieval-Augmented Generation).</p>
            </div>
            
            <div>
              <h4 className="text-gold-500 font-serif text-lg mb-1">Predictive Replenishment</h4>
              <p className="text-white/70 text-sm">Machine learning models analyze consumption patterns. If a user buys 1kg every 4 weeks reliably, the system algorithmically sends an actionable "Approve Refill" push notification via Apple Wallet/PWA exactly at week 3.5.</p>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: "mobile",
    title: "14. Mobile Experience",
    icon: "Smartphone",
    content: (
      <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
         <h3 className="text-2xl font-serif text-gold-500 border-b border-white/10 pb-2">The App-Like PWA Paradigm</h3>
         <p className="text-white/80 font-light text-sm mb-6">90%+ of traffic will originate from Instagram and TikTok. The mobile web experience must be completely divorced from traditional desktop responsive paradigms.</p>

         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-[#111] p-5 rounded-lg border border-white/5">
              <h4 className="text-white font-serif mb-2">Bottom Sheet Architecture</h4>
              <p className="text-white/60 text-sm">Filters, Carts, and Navigation do not open new pages or modal popups. They slide up from the bottom (iOS style Bottom Sheets) to remain perfectly in the user's thumb zone.</p>
            </div>
            <div className="bg-[#111] p-5 rounded-lg border border-white/5">
              <h4 className="text-white font-serif mb-2">Haptic Feedback</h4>
              <p className="text-white/60 text-sm">Utilizing the navigator.vibrate API (for Android) to trigger a subtle haptic "tick" when items are added to cart or loyalty points are claimed, reinforcing the tactile luxury feel.</p>
            </div>
            <div className="bg-[#111] p-5 rounded-lg border border-white/5 md:col-span-2">
              <h4 className="text-white font-serif mb-2">The Sticky Commerce Zone</h4>
              <p className="text-white/60 text-sm">On PDPs, the "Add to Cart" button detaches and clamps to the bottom of the screen upon scroll. It is perpetually available, accompanied by a dynamic Apple Pay / Google Pay fast button to bypass forms entirely.</p>
            </div>
         </div>
      </div>
    ),
  },
  {
    id: "arabicux",
    title: "15. Arabic UX Optimization",
    icon: "Globe",
    content: (
      <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
        <h3 className="text-2xl font-serif text-gold-500 border-b border-white/10 pb-2">Bi-Directional Mastery (RTL/LTR)</h3>
        
        <p className="text-white/80 font-light text-sm mb-4">Translating text is 10% of the work. Cultural translation is the 90%.</p>

        <ul className="space-y-4">
          <li className="glass-panel p-4 rounded-lg flex flex-col gap-2">
            <strong className="text-gold-400 font-serif">Deep Mirroring</strong>
            <span className="text-sm text-white/70">CSS Logical Properties (<code>margin-inline-start</code> instead of <code>margin-left</code>) are enforced globally. Carousels swipe right-to-left. Progress bars load right-to-left. Back buttons point to the right.</span>
          </li>
          <li className="glass-panel p-4 rounded-lg flex flex-col gap-2">
            <strong className="text-gold-400 font-serif">Cultural Iconography</strong>
            <span className="text-sm text-white/70">Icons are localized. When showing a hand pouring or offering coffee, it MUST be the right hand (culturally mandated in Arabic hospitality).</span>
          </li>
          <li className="glass-panel p-4 rounded-lg flex flex-col gap-2">
            <strong className="text-gold-400 font-serif">Typographic Hierarchy Fixes</strong>
            <span className="text-sm text-white/70">Arabic fonts generally render smaller visually than their Latin counterparts at the same pixel size. The design system programmatically scales up Arabic elements by ~10% via a global <code>[dir="rtl"]</code> CSS selector cascade to maintain visual parity.</span>
          </li>
        </ul>
      </div>
    ),
  },
  {
    id: "roadmap",
    title: "16. Scalability Roadmap",
    icon: "Rocket",
    content: (
      <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
        <p className="text-white/80 font-light text-lg mb-6">The blueprint for evolving from a premium roaster to a global lifestyle holding company.</p>
        
        <div className="relative border-l border-gold-500/30 pl-6 space-y-8 ml-3">
          <div className="relative">
            <div className="absolute -left-[30px] top-1 w-4 h-4 rounded-full border-2 border-gold-500 bg-onyx"></div>
            <h4 className="text-white font-serif text-xl border-b border-white/10 inline-block pb-1 pr-4">Phase 1: Digital Supremacy (Months 1-6)</h4>
            <p className="text-white/60 text-sm mt-3">Launch Headless site. Establish "The Diwan" CRM. Dominate direct-to-consumer (DTC) in KSA & UAE. Achieve 4%+ conversion rates via performance architecture.</p>
          </div>

          <div className="relative">
            <div className="absolute -left-[30px] top-1 w-4 h-4 rounded-full border-2 border-gold-500 bg-onyx"></div>
            <h4 className="text-white font-serif text-xl border-b border-white/10 inline-block pb-1 pr-4">Phase 2: B2B & App Ecosystem (Months 6-12)</h4>
            <p className="text-white/60 text-sm mt-3">Launch dedicated B2B Wholesale Portal for high-end hotels/cafes (hidden URL, tiered pricing, volume prediction). Deploy native React Native applications for iOS/Android for top 20% tier customers.</p>
          </div>

          <div className="relative">
            <div className="absolute -left-[30px] top-1 w-4 h-4 rounded-full border-2 border-gold-500 bg-onyx shadow-[0_0_15px_rgba(212,175,55,0.6)]"></div>
            <h4 className="text-white font-serif text-xl border-b border-gold-500/50 inline-block pb-1 pr-4 mb-2">Phase 3: Omnichannel Globalization (Year 2+)</h4>
            <ul className="text-white/60 text-sm space-y-2">
              <li>• POS (Point of Sale) integration with physical Abu Saleh luxury lounges.</li>
              <li>• Automated global distribution hubs (EU & US) integrating localized Shopify sub-stores.</li>
              <li>• AR Packaging: Pointing a phone at the physical coffee bag triggers a 3D hologram narrating the farm's origin history.</li>
            </ul>
          </div>
        </div>
      </div>
    ),
  }
];
