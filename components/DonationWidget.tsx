"use client";
import { useState } from "react";

export default function DonationWidget() {
  const [amount, setAmount] = useState(10000);
  const presets = [5000, 10000, 20000, 50000];
  return (
    <div className="rounded-xl border bg-white p-6 shadow-soft">
      <h3 className="text-lg font-semibold">Apoya con una donación</h3>
      <p className="mt-1 text-sm text-gray-600">Tu aporte impulsa formación, materiales y exhibiciones.</p>
      <div className="mt-4 flex flex-wrap gap-2">
        {presets.map(v => (
          <button key={v} onClick={() => setAmount(v)} className={`rounded-md border px-3 py-2 text-sm ${amount===v?'bg-brand-600 text-white border-brand-600':'hover:bg-gray-50'}`}>CLP {v.toLocaleString()}</button>
        ))}
      </div>
      <div className="mt-3">
        <label className="text-sm">Otro monto</label>
        <input type="number" value={amount} onChange={(e)=>setAmount(Number(e.target.value||0))} className="mt-1 w-full rounded-md border px-3 py-2" />
      </div>
      <a href="#" className="mt-4 inline-flex w-full justify-center rounded-md bg-brand-600 px-4 py-2 font-medium text-white hover:bg-brand-700">
        Donar con Webpay / Mercado Pago
      </a>
      <p className="mt-2 text-xs text-gray-500">Simulado. Conecta tu pasarela en /donar.</p>
    </div>
  );
}
