import React, { useState, useEffect, useRef } from 'react';
import { 
  ShoppingBasket, 
  User, 
  CheckCircle, 
  QrCode, 
  Bolt, 
  ShieldCheck, 
  ArrowRight, 
  ArrowLeft,
  Trash2,
  Plus,
  Minus,
  ScanLine,
  Flashlight,
  Camera,
  Keyboard,
  ShoppingCart,
  ReceiptText,
  Verified,
  History,
  LayoutDashboard,
  Smartphone
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Html5QrcodeScanner } from 'html5-qrcode';
import { QRCodeSVG } from 'qrcode.react';
import { Item, CartItem, Page } from './types';

// --- Components ---

const Navbar = ({ currentPage, onNavigate, cartCount }: { currentPage: Page, onNavigate: (p: Page) => void, cartCount: number }) => (
  <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-xl border-b border-zinc-100">
    <div className="flex justify-between items-center px-6 py-4 max-w-7xl mx-auto">
      <div className="flex items-center gap-2 cursor-pointer" onClick={() => onNavigate('welcome')}>
        <span className="text-xl font-bold tracking-tighter text-primary font-headline">The Fluid Retailer</span>
      </div>
      <div className="hidden md:flex gap-8 items-center font-headline text-sm font-medium tracking-tight">
        <button 
          onClick={() => onNavigate('welcome')}
          className={`${currentPage === 'welcome' ? 'text-primary font-bold border-b-2 border-primary' : 'text-zinc-500 hover:text-primary'} transition-all px-2 py-1`}
        >
          Welcome
        </button>
        <button 
          onClick={() => onNavigate('scanner')}
          className={`${currentPage === 'scanner' ? 'text-primary font-bold border-b-2 border-primary' : 'text-zinc-500 hover:text-primary'} transition-all px-2 py-1`}
        >
          Scanner
        </button>
        <button 
          onClick={() => onNavigate('cart')}
          className={`${currentPage === 'cart' ? 'text-primary font-bold border-b-2 border-primary' : 'text-zinc-500 hover:text-primary'} transition-all px-2 py-1`}
        >
          Cart
        </button>
      </div>
      <div className="flex items-center gap-4">
        <button className="relative text-primary hover:bg-zinc-50 p-2 rounded-full transition-colors" onClick={() => onNavigate('cart')}>
          <ShoppingBasket size={24} />
          {cartCount > 0 && (
            <span className="absolute -top-1 -right-1 bg-primary text-white text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center shadow-sm">
              {cartCount}
            </span>
          )}
        </button>
        <button className="text-primary hover:bg-zinc-50 p-2 rounded-full transition-colors">
          <User size={24} />
        </button>
      </div>
    </div>
  </nav>
);

const Footer = () => (
  <footer className="w-full py-8 mt-auto bg-zinc-50 border-t border-zinc-200">
    <div className="flex flex-col md:flex-row justify-between items-center px-8 max-w-7xl mx-auto gap-4">
      <p className="font-body text-xs text-zinc-500">© 2024 The Fluid Retailer. Architectural Concierge Systems.</p>
      <div className="flex gap-6">
        <a href="#" className="text-xs text-zinc-500 hover:text-primary transition-colors">Privacy Policy</a>
        <a href="#" className="text-xs text-zinc-500 hover:text-primary transition-colors">Terms of Service</a>
        <a href="#" className="text-xs text-zinc-500 hover:text-primary transition-colors">Help Center</a>
      </div>
    </div>
  </footer>
);

// --- Pages ---

const WelcomePage = ({ onStart }: { onStart: () => void }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    className="pt-28 pb-20 px-6 max-w-7xl mx-auto w-full"
  >
    <section className="flex flex-col lg:flex-row items-center gap-12 mb-20">
      <div className="lg:w-1/2 space-y-6">
        <h1 className="font-headline text-5xl md:text-7xl font-extrabold tracking-tighter leading-tight text-primary">
          Shopping, <br/><span className="text-primary-container">Evolved.</span>
        </h1>
        <p className="text-lg text-on-surface-variant max-w-md font-medium leading-relaxed">
          Experience the future of retail. No queues, no hassle. Just scan, review, and pay on the go with our architectural concierge system.
        </p>
        <div className="pt-4">
          <button 
            onClick={onStart}
            className="primary-gradient text-white px-10 py-4 rounded-full font-headline font-bold text-sm tracking-widest uppercase shadow-lg shadow-primary/20 active:scale-95 transition-transform"
          >
            Start Shopping
          </button>
        </div>
      </div>
      <div className="lg:w-1/2 relative">
        <div className="aspect-square bg-surface-container rounded-full absolute -z-10 w-full h-full scale-110 opacity-50 blur-3xl"></div>
        <div className="rounded-3xl overflow-hidden shadow-2xl bg-surface-container-lowest p-4 relative">
          <img 
            alt="Modern retail store interior" 
            className="rounded-2xl w-full h-[500px] object-cover" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDI39FKfBBxZIctkUwqsoYKtHRIooi1dALwTCydsVfRPFw4NmRh0mPZmQHqsrPgeelc9O_VeBrjG3JOap5POzdC0h7bdf3Yokzkbf0ilDAyAGXw3cNtzW_f3_80QVkNfBYNhDCoYsZt6gaFZJ99jmsNuxqmcJbl_yUfMA33A61BiVpGTAYK0411P-hPaeEBLHVM5gTlF0Iz-tlZE92yEyEPhv_-Z8PWL-3PY7krHiLj9eDE0TIqXhaWaCubRM7SYvMngSSQhLBAryhN"
          />
          <div className="absolute bottom-10 right-10 glass-effect bg-white/80 p-6 rounded-2xl shadow-xl flex items-center gap-4">
            <div className="bg-primary-fixed p-3 rounded-xl">
              <Bolt className="text-primary" />
            </div>
            <div>
              <p className="font-headline font-bold text-primary">Swift Checkout</p>
              <p className="text-xs text-on-surface-variant font-medium">Average time: 45s</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="space-y-12">
      <div className="flex flex-col md:flex-row justify-between items-end gap-4 border-b border-outline-variant/15 pb-6">
        <div>
          <span className="font-headline text-primary font-bold tracking-widest uppercase text-xs">How it works</span>
          <h2 className="font-headline text-3xl font-extrabold tracking-tight mt-1">Simple Three Step Flow</h2>
        </div>
        <p className="text-on-surface-variant text-sm font-medium max-w-xs md:text-right">
          Designed for maximum speed and efficiency in high-glare retail environments.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          { step: '1. Scan', desc: 'Point your camera at any item barcode or shelf QR code to instantly add it to your virtual bag.', icon: <ScanLine className="text-primary text-3xl" /> },
          { step: '2. Review', desc: 'Keep track of your total spend in real-time. Adjust quantities or remove items with a single swipe.', icon: <ShoppingCart className="text-primary text-3xl" /> },
          { step: '3. Pay', desc: 'Checkout instantly using UPI, credit cards, or digital wallets. Skip the traditional payment desk.', icon: <ReceiptText className="text-primary text-3xl" /> }
        ].map((item, i) => (
          <div key={i} className="bg-surface-container-low p-8 rounded-3xl flex flex-col justify-between min-h-[320px] group hover:bg-surface-container-lowest transition-colors duration-300">
            <div>
              <div className="w-16 h-16 bg-primary-container/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                {item.icon}
              </div>
              <h3 className="font-headline text-2xl font-bold mb-3">{item.step}</h3>
              <p className="text-on-surface-variant font-medium">{item.desc}</p>
            </div>
            <div className="mt-8 flex items-center gap-2">
              {[0, 1, 2].map(dot => (
                <span key={dot} className={`h-1 rounded-full transition-all ${dot === i ? 'w-12 bg-primary' : 'w-2 bg-outline-variant/30'}`}></span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  </motion.div>
);

const ScannerPage = ({ 
  items, 
  onAddToCart, 
  cartItems, 
  totalAmount 
}: { 
  items: Item[], 
  onAddToCart: (item: Item, qty: number) => void,
  cartItems: CartItem[],
  totalAmount: number
}) => {
  const [manualId, setManualId] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [lastScanned, setLastScanned] = useState<Item | null>(null);
  const [isScanning, setIsScanning] = useState(true);
  const scannerRef = useRef<Html5QrcodeScanner | null>(null);

  useEffect(() => {
    if (isScanning) {
      scannerRef.current = new Html5QrcodeScanner(
        "reader",
        { fps: 10, qrbox: { width: 250, height: 250 } },
        /* verbose= */ false
      );
      scannerRef.current.render(onScanSuccess, onScanFailure);
    }

    return () => {
      if (scannerRef.current) {
        scannerRef.current.clear().catch(err => console.error("Failed to clear scanner", err));
      }
    };
  }, [isScanning]);

  function onScanSuccess(decodedText: string) {
    const item = items.find(i => i.id.toString() === decodedText);
    if (item) {
      setLastScanned(item);
      // Optional: Pause scanning after success
      // setIsScanning(false);
    }
  }

  function onScanFailure(error: any) {
    // Handle scan failure, usually better to ignore and keep scanning
  }

  const handleIdentify = (e: React.FormEvent) => {
    e.preventDefault();
    const item = items.find(i => i.id.toString() === manualId);
    if (item) {
      setLastScanned(item);
    } else {
      alert('Item not found');
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-28 pb-12 px-4 md:px-8 max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-8"
    >
      <div className="lg:col-span-7 flex flex-col gap-6">
        <header className="mb-2">
          <h1 className="font-headline text-3xl font-extrabold tracking-tight text-primary">Item Entry</h1>
          <p className="text-on-surface-variant font-body mt-1">Point your camera at a barcode or enter details manually.</p>
        </header>

        <div className="relative aspect-video md:aspect-[4/3] w-full bg-zinc-900 rounded-xl overflow-hidden ring-4 ring-primary-fixed shadow-2xl">
          <div id="reader" className="w-full h-full"></div>
          {!isScanning && (
            <div className="absolute inset-0 bg-zinc-800 flex items-center justify-center">
              <button 
                onClick={() => setIsScanning(true)}
                className="bg-primary text-white px-6 py-3 rounded-full font-bold"
              >
                Restart Camera
              </button>
            </div>
          )}
        </div>

        <section className="bg-surface-container-low p-8 rounded-xl">
          <div className="flex items-center gap-3 mb-6">
            <Keyboard className="text-primary" />
            <h2 className="font-headline font-bold text-lg text-primary">Manual Entry</h2>
          </div>
          <form onSubmit={handleIdentify} className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="font-label text-xs font-semibold text-on-surface-variant uppercase tracking-wider">Item Number / SKU</label>
              <input 
                className="w-full bg-surface-container-lowest border-none rounded-lg p-4 font-body focus:ring-2 focus:ring-primary outline-none transition-all" 
                placeholder="E.G. 102" 
                type="text"
                value={manualId}
                onChange={(e) => setManualId(e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <label className="font-label text-xs font-semibold text-on-surface-variant uppercase tracking-wider">Quantity</label>
              <div className="flex items-center bg-surface-container-lowest rounded-lg p-1">
                <button 
                  type="button"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-3 text-primary hover:bg-surface-container-high rounded-lg transition-colors"
                >
                  <Minus size={16} />
                </button>
                <input 
                  className="w-full bg-transparent border-none text-center font-bold focus:ring-0" 
                  type="number" 
                  value={quantity}
                  readOnly
                />
                <button 
                  type="button"
                  onClick={() => setQuantity(quantity + 1)}
                  className="p-3 text-primary hover:bg-surface-container-high rounded-lg transition-colors"
                >
                  <Plus size={16} />
                </button>
              </div>
            </div>
            <button 
              className="md:col-span-2 primary-gradient text-white py-4 rounded-full font-label font-bold uppercase tracking-widest text-sm hover:shadow-lg transition-all active:scale-[0.98]" 
              type="submit"
            >
              Identify Item
            </button>
          </form>
        </section>
      </div>

      <div className="lg:col-span-5 flex flex-col gap-6">
        <AnimatePresence mode="wait">
          {lastScanned ? (
            <motion.section 
              key={lastScanned.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-surface-container-lowest p-6 rounded-xl border border-primary-fixed shadow-sm"
            >
              <div className="flex items-center justify-between mb-6">
                <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-bold font-label uppercase">Last Scanned</span>
                <span className="text-xs text-on-surface-variant">Just now</span>
              </div>
              <div className="flex gap-6 items-start">
                <div className="w-32 h-32 bg-surface-container rounded-lg overflow-hidden flex-shrink-0">
                  <img alt={lastScanned.name} className="w-full h-full object-cover" src={lastScanned.image} />
                </div>
                <div className="flex-grow">
                  <h3 className="font-headline font-bold text-xl leading-tight mb-1">{lastScanned.name}</h3>
                  <p className="text-on-surface-variant text-sm mb-3">SKU: {lastScanned.id}</p>
                  <div className="flex items-baseline gap-2">
                    <span className="font-headline text-2xl font-black text-primary">₹{lastScanned.price}</span>
                  </div>
                </div>
              </div>
              <div className="mt-8 flex flex-col gap-3">
                <button 
                  onClick={() => {
                    onAddToCart(lastScanned, quantity);
                    setLastScanned(null);
                    setManualId('');
                    setQuantity(1);
                  }}
                  className="w-full primary-gradient text-white py-4 rounded-full font-label font-bold uppercase tracking-widest text-sm flex items-center justify-center gap-2 hover:shadow-xl transition-all"
                >
                  <ShoppingCart size={20} />
                  Add to Cart
                </button>
                <button 
                  onClick={() => setLastScanned(null)}
                  className="w-full bg-surface-container-high text-on-surface py-3 rounded-full font-label font-bold uppercase tracking-widest text-xs hover:bg-surface-container-highest transition-all"
                >
                  Dismiss
                </button>
              </div>
            </motion.section>
          ) : (
            <div className="bg-surface-container-low p-12 rounded-xl border border-dashed border-outline-variant flex flex-col items-center justify-center text-center">
              <ScanLine size={48} className="text-outline-variant mb-4" />
              <p className="text-on-surface-variant font-medium">Scan an item or enter SKU to see details here.</p>
            </div>
          )}
        </AnimatePresence>

        <section className="grid grid-cols-2 gap-4">
          <div className="bg-secondary-container p-6 rounded-xl flex flex-col justify-between aspect-square">
            <ShoppingCart className="text-on-secondary-container" size={32} />
            <div>
              <p className="text-4xl font-headline font-black text-on-secondary-container">{cartItems.reduce((acc, item) => acc + item.quantity, 0).toString().padStart(2, '0')}</p>
              <p className="font-label text-xs font-bold uppercase text-on-secondary-container opacity-70">Items in Cart</p>
            </div>
          </div>
          <div className="bg-surface-container-low p-6 rounded-xl flex flex-col justify-between aspect-square">
            <ReceiptText className="text-primary" size={32} />
            <div>
              <p className="text-3xl font-headline font-black text-primary">₹{totalAmount.toFixed(2)}</p>
              <p className="font-label text-xs font-bold uppercase text-on-surface-variant opacity-70">Current Total</p>
            </div>
          </div>
        </section>
      </div>
    </motion.div>
  );
};

const CartPage = ({ 
  cartItems, 
  onUpdateQty, 
  onRemove, 
  onProceedToCheckout,
  onNavigate
}: { 
  cartItems: CartItem[], 
  onUpdateQty: (id: number, delta: number) => void,
  onRemove: (id: number) => void,
  onProceedToCheckout: () => void,
  onNavigate: (p: Page) => void
}) => {
  const subtotal = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);
  const tax = subtotal * 0.08;
  const fee = subtotal > 0 ? 1.50 : 0;
  const total = subtotal + tax + fee;

  return (
    <motion.div 
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="pt-24 pb-32 px-4 md:px-8 max-w-5xl mx-auto w-full"
    >
      <header className="mb-12">
        <h1 className="font-headline text-4xl md:text-5xl font-extrabold tracking-tighter text-primary mb-2">Review Your Cart</h1>
        <p className="font-body text-on-surface-variant text-lg">{cartItems.length} items ready for checkout</p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        <section className="lg:col-span-7 space-y-6">
          {cartItems.map((item) => (
            <div key={item.id} className="bg-surface-container-lowest rounded-xl p-4 flex gap-6 items-center transition-all hover:bg-surface-container-highest group">
              <div className="w-24 h-24 bg-surface-container-low rounded-xl overflow-hidden flex-shrink-0">
                <img className="w-full h-full object-cover" src={item.image} alt={item.name} />
              </div>
              <div className="flex-grow">
                <div className="flex justify-between items-start">
                  <h3 className="font-headline font-bold text-lg text-on-surface">{item.name}</h3>
                  <span className="font-headline font-extrabold text-primary">₹{item.price}</span>
                </div>
                <p className="text-xs text-on-surface-variant mb-4">SKU: {item.id}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center bg-surface-container-high rounded-full px-2 py-1">
                    <button 
                      onClick={() => onUpdateQty(item.id, -1)}
                      className="text-on-surface-variant p-1 hover:text-primary active:scale-90 transition-transform"
                    >
                      <Minus size={16} />
                    </button>
                    <span className="px-4 font-bold text-sm">{item.quantity}</span>
                    <button 
                      onClick={() => onUpdateQty(item.id, 1)}
                      className="text-on-surface-variant p-1 hover:text-primary active:scale-90 transition-transform"
                    >
                      <Plus size={16} />
                    </button>
                  </div>
                  <button 
                    onClick={() => onRemove(item.id)}
                    className="text-outline hover:text-red-500 transition-colors"
                  >
                    <Trash2 size={20} />
                  </button>
                </div>
              </div>
            </div>
          ))}

          {cartItems.length === 0 && (
            <div className="text-center py-12 bg-surface-container-low rounded-xl border-2 border-dashed border-outline-variant">
              <ShoppingBasket size={48} className="mx-auto text-outline-variant mb-4" />
              <p className="text-on-surface-variant font-medium">Your cart is empty.</p>
            </div>
          )}

          <button 
            onClick={() => onNavigate('scanner')}
            className="w-full py-4 border-2 border-dashed border-outline-variant/30 rounded-xl font-headline font-bold text-on-surface-variant hover:border-primary hover:text-primary transition-all flex items-center justify-center gap-2"
          >
            <Plus size={20} />
            Scan More Items
          </button>
        </section>

        <aside className="lg:col-span-5 sticky top-32">
          <div className="bg-surface-container-low rounded-xl p-8 flex flex-col relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-primary"></div>
            <h2 className="font-headline text-2xl font-extrabold text-primary mb-8 tracking-tight">Order Summary</h2>
            <div className="space-y-4 mb-8">
              <div className="flex justify-between items-center text-on-surface-variant">
                <span className="font-body">Subtotal</span>
                <span className="font-headline font-medium">₹{subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between items-center text-on-surface-variant">
                <span className="font-body">Tax (GST 8%)</span>
                <span className="font-headline font-medium">₹{tax.toFixed(2)}</span>
              </div>
              <div className="flex justify-between items-center text-on-surface-variant">
                <span className="font-body">Eco-Packaging Fee</span>
                <span className="font-headline font-medium">₹{fee.toFixed(2)}</span>
              </div>
            </div>
            <div className="bg-zinc-200 h-[1px] mb-8"></div>
            <div className="flex justify-between items-end mb-10">
              <div>
                <span className="block text-xs uppercase tracking-widest text-on-surface-variant font-bold mb-1">Total Amount</span>
                <span className="font-headline text-5xl font-extrabold text-on-surface">₹{total.toFixed(2)}</span>
              </div>
              <Verified className="text-primary-container" size={40} />
            </div>
            <button 
              disabled={cartItems.length === 0}
              onClick={onProceedToCheckout}
              className="w-full py-5 rounded-full primary-gradient text-white font-headline font-extrabold text-lg uppercase tracking-wider flex items-center justify-center gap-3 shadow-lg shadow-primary/20 active:scale-95 transition-transform disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Proceed to Checkout
              <ArrowRight size={24} />
            </button>
          </div>
        </aside>
      </div>
    </motion.div>
  );
};

const CheckoutPage = ({ total, onComplete }: { total: number, onComplete: () => void }) => {
  const upiId = "merchant@upi"; // Mock UPI ID
  const upiUrl = `upi://pay?pa=${upiId}&pn=FluidRetailer&am=${total.toFixed(2)}&cu=INR`;

  const handlePayViaApp = () => {
    window.location.href = upiUrl;
    // In a real app, we'd wait for a callback or poll the server.
    // For this demo, we'll simulate a successful payment after a delay.
    setTimeout(onComplete, 3000);
  };

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      className="pt-28 pb-12 px-4 max-w-3xl mx-auto space-y-8"
    >
      <header className="text-center space-y-2">
        <h1 className="font-headline text-3xl font-extrabold tracking-tight text-primary">Complete Payment</h1>
        <p className="text-on-surface-variant font-medium">Scan the QR code or pay using your preferred UPI app.</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        <section className="md:col-span-7 bg-surface-container-lowest rounded-3xl p-8 flex flex-col items-center justify-center space-y-6 shadow-sm">
          <div className="text-center">
            <span className="text-xs font-bold font-headline uppercase tracking-widest text-outline mb-4 block">UPI Payment Terminal</span>
            <div className="bg-white p-6 rounded-2xl shadow-md border border-zinc-100">
              <QRCodeSVG value={upiUrl} size={200} level="H" includeMargin={true} />
            </div>
            <p className="mt-4 text-sm font-bold text-primary">₹{total.toFixed(2)}</p>
          </div>
          <p className="text-[10px] text-outline text-center leading-relaxed">Scan with GPay, PhonePe, or Paytm</p>
        </section>

        <section className="md:col-span-5 flex flex-col gap-6">
          <div className="bg-surface-container-low rounded-3xl p-8 flex-1 flex flex-col justify-center space-y-6 shadow-sm">
            <div className="text-center space-y-4">
              <Smartphone size={48} className="mx-auto text-primary" />
              <h3 className="font-headline font-bold">Pay via UPI App</h3>
              <p className="text-xs text-on-surface-variant">Directly open your installed UPI apps for a faster checkout.</p>
            </div>
            <button 
              onClick={handlePayViaApp}
              className="w-full primary-gradient text-white py-4 rounded-full font-headline font-bold text-xs uppercase tracking-widest active:scale-95 transition-transform flex items-center justify-center gap-2"
            >
              <Smartphone size={16} />
              Open UPI App
            </button>
            <button 
              onClick={onComplete}
              className="w-full bg-white text-primary border border-primary/20 py-3 rounded-full font-headline font-bold text-[10px] uppercase tracking-widest active:scale-95 transition-transform"
            >
              Simulate Success
            </button>
          </div>
        </section>
      </div>
    </motion.div>
  );
};

const SuccessPage = ({ total, onReset }: { total: number, onReset: () => void }) => (
  <motion.div 
    initial={{ opacity: 0, scale: 0.9 }}
    animate={{ opacity: 1, scale: 1 }}
    className="pt-24 pb-12 px-4 max-w-3xl mx-auto space-y-8"
  >
    <header className="text-center space-y-2">
      <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-secondary-container text-primary mb-4">
        <CheckCircle size={40} />
      </div>
      <h1 className="font-headline text-3xl font-extrabold tracking-tight text-primary">Payment Successful</h1>
      <p className="text-on-surface-variant font-medium">Your architectural aesthetic has been secured.</p>
    </header>

    <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
      <section className="md:col-span-12 bg-surface-container-low rounded-3xl p-8 flex flex-col items-center justify-center space-y-6 shadow-sm">
        <div className="w-full flex justify-between items-baseline border-b border-zinc-200 pb-4">
          <span className="text-xs text-on-surface-variant font-medium uppercase tracking-tighter">Total Paid</span>
          <span className="font-headline text-3xl font-black text-primary tracking-tighter">₹{total.toFixed(2)}</span>
        </div>
        <div className="w-full grid grid-cols-2 gap-4 text-sm">
          <div>
            <span className="text-on-surface-variant block text-xs">Date</span>
            <span className="font-semibold">{new Date().toLocaleDateString()}</span>
          </div>
          <div className="text-right">
            <span className="text-on-surface-variant block text-xs">Transaction ID</span>
            <span className="font-mono text-xs">#TFR-{Math.floor(Math.random() * 10000)}-XKB</span>
          </div>
        </div>
      </section>

      <section className="md:col-span-12 bg-primary-container rounded-3xl overflow-hidden relative p-8">
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full -mr-20 -mt-20 blur-3xl"></div>
        <div className="relative flex flex-col md:flex-row items-center gap-8 md:justify-between">
          <div className="flex flex-col gap-2 max-w-sm">
            <div className="inline-flex items-center gap-2 text-primary-fixed font-headline font-bold uppercase tracking-widest text-[10px]">
              <Bolt size={14} />
              Fast Exit Authorization
            </div>
            <h2 className="font-headline text-2xl font-extrabold text-white tracking-tight">Verified Digital Receipt</h2>
            <p className="text-primary-fixed/80 text-sm leading-relaxed">Present this QR code at the Fast Exit gate to finalize your session. This authorization expires in 15 minutes.</p>
          </div>
          <div className="bg-white p-3 rounded-xl shadow-2xl">
            <QRCodeSVG value={`EXIT-${Math.random()}`} size={128} />
          </div>
        </div>
      </section>
    </div>

    <div className="text-center pt-8">
      <button 
        onClick={onReset}
        className="primary-gradient text-white px-12 py-4 rounded-full font-headline font-bold text-sm tracking-widest uppercase shadow-lg active:scale-95 transition-transform"
      >
        Return to Home
      </button>
    </div>
  </motion.div>
);

// --- Main App ---

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('welcome');
  const [items, setItems] = useState<Item[]>([]);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [lastTotal, setLastTotal] = useState(0);

  useEffect(() => {
    fetch('/api/items')
      .then(res => res.json())
      .then(data => setItems(data));
  }, []);

  const addToCart = (item: Item, qty: number) => {
    setCartItems(prev => {
      const existing = prev.find(i => i.id === item.id);
      if (existing) {
        return prev.map(i => i.id === item.id ? { ...i, quantity: i.quantity + qty } : i);
      }
      return [...prev, { ...item, quantity: qty }];
    });
  };

  const updateQty = (id: number, delta: number) => {
    setCartItems(prev => prev.map(item => {
      if (item.id === id) {
        return { ...item, quantity: Math.max(1, item.quantity + delta) };
      }
      return item;
    }));
  };

  const removeItem = (id: number) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  };

  const handleCheckoutComplete = async () => {
    // Simulate API calls for each item to update stock
    for (const item of cartItems) {
      await fetch('/api/buy', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id: item.id, quantity: item.quantity })
      });
    }

    setCartItems([]);
    setCurrentPage('success');
  };

  const subtotal = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);
  const totalAmount = subtotal + (subtotal * 0.08) + (subtotal > 0 ? 1.50 : 0);

  return (
    <div className="min-h-screen flex flex-col bg-surface">
      <Navbar 
        currentPage={currentPage} 
        onNavigate={setCurrentPage} 
        cartCount={cartItems.reduce((acc, i) => acc + i.quantity, 0)} 
      />
      
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          {currentPage === 'welcome' && (
            <motion.div key="welcome" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
              <WelcomePage onStart={() => setCurrentPage('scanner')} />
            </motion.div>
          )}
          {currentPage === 'scanner' && (
            <motion.div key="scanner" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
              <ScannerPage 
                items={items} 
                onAddToCart={addToCart} 
                cartItems={cartItems}
                totalAmount={totalAmount}
              />
            </motion.div>
          )}
          {currentPage === 'cart' && (
            <motion.div key="cart" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
              <CartPage 
                cartItems={cartItems} 
                onUpdateQty={updateQty} 
                onRemove={removeItem} 
                onProceedToCheckout={() => {
                  setLastTotal(totalAmount);
                  setCurrentPage('checkout');
                }}
                onNavigate={setCurrentPage}
              />
            </motion.div>
          )}
          {currentPage === 'checkout' && (
            <motion.div key="checkout" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
              <CheckoutPage 
                total={lastTotal} 
                onComplete={handleCheckoutComplete} 
              />
            </motion.div>
          )}
          {currentPage === 'success' && (
            <motion.div key="success" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
              <SuccessPage 
                total={lastTotal} 
                onReset={() => setCurrentPage('welcome')} 
              />
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      <Footer />
      
      {/* Mobile Bottom Nav */}
      <div className="md:hidden fixed bottom-0 left-0 w-full bg-white/90 backdrop-blur-xl border-t border-zinc-100 px-6 py-4 flex justify-around items-center z-50">
        <button onClick={() => setCurrentPage('welcome')} className={`flex flex-col items-center gap-1 ${currentPage === 'welcome' ? 'text-primary' : 'text-zinc-400'}`}>
          <LayoutDashboard size={20} />
          <span className="text-[10px] font-bold uppercase">Home</span>
        </button>
        <button onClick={() => setCurrentPage('scanner')} className={`flex flex-col items-center gap-1 ${currentPage === 'scanner' ? 'text-primary' : 'text-zinc-400'}`}>
          <ScanLine size={20} />
          <span className="text-[10px] font-bold uppercase">Scan</span>
        </button>
        <button onClick={() => setCurrentPage('cart')} className={`flex flex-col items-center gap-1 ${currentPage === 'cart' ? 'text-primary' : 'text-zinc-400'}`}>
          <ShoppingCart size={20} />
          <span className="text-[10px] font-bold uppercase">Cart</span>
        </button>
        <button className="flex flex-col items-center gap-1 text-zinc-400">
          <User size={20} />
          <span className="text-[10px] font-bold uppercase">Profile</span>
        </button>
      </div>
    </div>
  );
}
