import React, { useState } from 'react';
import { QuoteFormData, QuoteType } from '../types';
import { Send, Loader2 } from 'lucide-react';

export const QuoteForm: React.FC = () => {
  const [formData, setFormData] = useState<QuoteFormData>({
    name: '',
    email: '',
    phone: '',
    monthlyBill: 0,
    type: QuoteType.RESIDENTIAL
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="orcamento" className="py-24 bg-tech-900 relative">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="bg-tech-800/50 backdrop-blur-lg border border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Orçamento gratuito inteligente</h2>
            <p className="text-gray-400">Preencha os dados abaixo e receba uma análise preliminar do seu potencial solar.</p>
          </div>

          {submitted ? (
            <div className="text-center py-12 animate-float">
              <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Send className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Solicitação Enviada!</h3>
              <p className="text-gray-400">Nossa equipe de especialistas entrará em contato em breve com seu estudo personalizado.</p>
              <button 
                onClick={() => setSubmitted(false)}
                className="mt-8 text-solar-400 hover:text-white underline"
              >
                Enviar nova solicitação
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">Nome Completo</label>
                  <input
                    required
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-tech-950 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-solar-500 transition-colors"
                    placeholder="Seu nome"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">Telefone (WhatsApp)</label>
                  <input
                    required
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full bg-tech-950 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-solar-500 transition-colors"
                    placeholder="(00) 00000-0000"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">E-mail</label>
                  <input
                    required
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-tech-950 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-solar-500 transition-colors"
                    placeholder="seu@email.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">Tipo de Imóvel</label>
                  <select
                    name="type"
                    value={formData.type}
                    onChange={handleChange}
                    className="w-full bg-tech-950 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-solar-500 transition-colors appearance-none"
                  >
                    {Object.values(QuoteType).map((type) => (
                      <option key={type} value={type}>{type}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Valor Médio da Conta de Luz (R$)</label>
                <div className="relative">
                  <span className="absolute left-4 top-3 text-gray-500">R$</span>
                  <input
                    required
                    type="number"
                    name="monthlyBill"
                    min="0"
                    value={formData.monthlyBill || ''}
                    onChange={handleChange}
                    className="w-full bg-tech-950 border border-white/10 rounded-lg pl-12 pr-4 py-3 text-white focus:outline-none focus:border-solar-500 transition-colors"
                    placeholder="0,00"
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-gradient-to-r from-solar-500 to-solar-600 text-black font-bold py-4 rounded-lg hover:shadow-[0_0_20px_rgba(234,179,8,0.4)] transition-all transform hover:-translate-y-0.5 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {loading ? (
                  <>
                    <Loader2 className="animate-spin w-5 h-5" />
                    Processando...
                  </>
                ) : (
                  <>
                    Orçamento gratuito
                    <Send className="w-5 h-5" />
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};