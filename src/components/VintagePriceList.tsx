"use client";

const extras = [
    { name: "Exfoliación Facial", price: "6€" },
    { name: "Mascarilla Negra (Black Mask)", price: "8€" },
    { name: "Peinado con Pomada Premium", price: "3€" },
    { name: "Diseño Tribal / Hair Art", price: "+10€" },
    { name: "Cera de Nariz / Oídos", price: "5€" }
];

export function VintagePriceList() {
    return (
        <div className="mt-16 max-w-2xl mx-auto bg-[#f4f1ea] p-8 md:p-12 shadow-2xl skew-x-0 md:-skew-x-2 border-4 border-double border-zinc-800 text-zinc-900 relative">
            {/* Paper Texture Effect */}
            <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/aged-paper.png')] pointer-events-none"></div>

            <div className="text-center mb-8 border-b-2 border-zinc-900 pb-4">
                <h3 className="font-heading text-3xl md:text-4xl font-bold uppercase tracking-widest text-zinc-900">Menú Extra</h3>
                <p className="font-mono text-sm uppercase tracking-wide mt-2 text-zinc-600">Upgrade Your Style</p>
            </div>

            <ul className="space-y-4 font-mono text-sm md:text-base">
                {extras.map((item, idx) => (
                    <li key={idx} className="flex justify-between items-center border-b border-zinc-300 border-dotted pb-2 last:border-0 hover:pl-2 transition-all duration-300 cursor-default">
                        <span className="font-bold uppercase tracking-wide">{item.name}</span>
                        <span className="font-bold">{item.price}</span>
                    </li>
                ))}
            </ul>

            <div className="mt-8 text-center pt-4 border-t-2 border-zinc-900">
                <p className="text-xs font-bold uppercase tracking-widest opacity-60">Sello de Calidad Loop Barbershop</p>
            </div>

            {/* Decorative Screws/Rivets */}
            <div className="absolute top-4 left-4 w-3 h-3 rounded-full bg-zinc-400 border border-zinc-600 shadow-inner"></div>
            <div className="absolute top-4 right-4 w-3 h-3 rounded-full bg-zinc-400 border border-zinc-600 shadow-inner"></div>
            <div className="absolute bottom-4 left-4 w-3 h-3 rounded-full bg-zinc-400 border border-zinc-600 shadow-inner"></div>
            <div className="absolute bottom-4 right-4 w-3 h-3 rounded-full bg-zinc-400 border border-zinc-600 shadow-inner"></div>
        </div>
    )
}
