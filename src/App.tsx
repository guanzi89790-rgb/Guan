import { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, BarChart3, Brain, Check, Cpu, Globe, Network, ShieldCheck, Sparkles, TrendingUp, Users, Zap } from 'lucide-react';
import { cn } from './lib/utils';

const copy = {
  en: {
    nav: ['Infrastructure', 'Engines', 'AI Agents', 'Hardware'],
    badge: 'AI-Powered Trading Execution Network',
    headline: ['AI-POWERED', 'TRADING', 'EXECUTION.'],
    intro: 'Built on Google TimesFM prediction engine, 50,000+ AI agent debate system, and dynamic execution engine for a complete AI trading organization.',
    primary: 'Enter Live Dashboard',
    secondary: 'Join Now',
    stats: [['Win Rate', '95%+'], ['P/L Ratio', '1.5:1'], ['Run Time', '24/7'], ['AI Agents', '50K+']],
    sections: [
      ['Infrastructure', 'C Chain Computing Foundation', 'Computing center, data center, and on-chain infrastructure form a transparent execution layer for next-generation finance.'],
      ['Engines', 'Three-Engine Synergy', 'Prediction sees the future, decision creates conviction, and execution manages every position after opening.'],
      ['Agents', '7 AI Roles Debate Together', 'Specialized agents review trends, sentiment, value, momentum, order books, and risk boundaries before consensus.'],
      ['Hardware', 'Fortuna AI Edge Terminal', 'Integrated AI inference, trading terminal, and validator node hardware for the WorkFI era.']
    ],
    features: ['Strategy tokenization', 'Natural language strategy creation', 'Deep backtesting', 'Decision transparency', 'Millisecond execution', 'AI risk tiering'],
    footer: '© 2026 TRADING SKILL LABS INC.'
  },
  zh: {
    nav: ['基础设施', '核心引擎', 'AI 代理', '硬件终端'],
    badge: 'AI 驱动的交易执行网络',
    headline: ['AI 驱动的', '交易', '执行流水线。'],
    intro: '由 Google TimesFM 预测引擎、50,000+ AI 代理辩论系统和动态执行引擎驱动，为下一个周期打造完整 AI 交易组织。',
    primary: '进入实时控制台',
    secondary: '立即加入',
    stats: [['平均胜率', '95%+'], ['盈亏比', '1.5:1'], ['运行时间', '24/7'], ['AI 代理', '50K+']],
    sections: [
      ['基础设施', 'C 链计算基石', '计算中心、数据中心和链上基建共同形成透明、安全的新一代金融执行层。'],
      ['核心引擎', '三引擎协同架构', '预测引擎预见未来，决策引擎形成判断，执行引擎管理开仓后的每一步。'],
      ['AI 代理', '7 个 AI 角色共同辩论', '专业代理从趋势、情绪、价值、动量、订单簿和风险边界等维度达成共识。'],
      ['硬件终端', 'Fortuna AI 硬件终端', '集成 AI 推理、交易终端和验证节点能力，面向 WorkFI 时代的计算资产。']
    ],
    features: ['策略代币化', '自然语言建策', '深度回测系统', '决策透明化', '毫秒级执行', 'AI 风险分级'],
    footer: '© 2026 TRADING SKILL 实验室'
  }
};

const LogoMark = () => (
  <div className="grid h-10 w-10 place-items-center rounded-full bg-brand shadow-[0_0_32px_rgba(0,245,160,0.45)]">
    <TrendingUp className="h-6 w-6 text-[#050505]" strokeWidth={3} />
  </div>
);

const Card = ({ children, className }: { children: React.ReactNode; className?: string }) => (
  <motion.div
    initial={{ opacity: 0, y: 18 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
    className={cn('liquid-glass rounded-[2rem] border border-white/10 p-8', className)}
  >
    {children}
  </motion.div>
);

export default function App() {
  const [lang, setLang] = useState<'en' | 'zh'>('en');
  const t = copy[lang];

  return (
    <main className="min-h-screen overflow-hidden bg-[#0c0c0c] text-white">
      <div className="fixed inset-0 opacity-20">
        <video autoPlay loop muted playsInline className="h-full w-full object-cover grayscale hue-rotate-[120deg]" src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260508_064122_c4750c0e-7476-4b44-94a2-a85a65c63bf2.mp4" />
      </div>
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_50%_10%,rgba(0,245,160,0.18),transparent_34%),linear-gradient(180deg,transparent,rgba(0,0,0,0.82))]" />

      <nav className="relative z-10 mx-auto flex h-24 max-w-7xl items-center justify-between px-6">
        <div className="flex items-center gap-3">
          <LogoMark />
          <span className="font-mono text-xl font-black uppercase tracking-tight text-brand">TradingSkill</span>
        </div>
        <div className="hidden gap-8 xl:flex">
          {t.nav.map(item => <a key={item} href="#platform" className="text-[10px] font-bold uppercase tracking-[0.22em] text-white/45 hover:text-brand">{item}</a>)}
        </div>
        <button onClick={() => setLang(lang === 'en' ? 'zh' : 'en')} className="flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-[10px] font-bold uppercase tracking-widest hover:bg-white/10">
          <Globe className="h-3.5 w-3.5" /> {lang === 'en' ? '中文' : 'EN'}
        </button>
      </nav>

      <section className="relative z-10 mx-auto flex max-w-7xl flex-col items-center px-6 pb-24 pt-16 text-center md:pt-28">
        <div className="mb-10 inline-flex items-center gap-2 rounded-full border border-brand/20 bg-brand/10 px-4 py-1.5 text-[10px] font-bold uppercase tracking-widest text-brand">
          <span className="h-1.5 w-1.5 rounded-full bg-brand" /> {t.badge}
        </div>
        <h1 className="mb-10 text-6xl font-black leading-[0.82] tracking-tighter md:text-[8rem]">
          {t.headline[0]}<br />
          <span className="animate-shiny bg-[linear-gradient(to_right,#091020,#00a36c,#00f5a0,#50ffc0,#00a36c,#091020)] bg-[length:200%_auto] bg-clip-text text-transparent">{t.headline[1]}</span><br />
          {t.headline[2]}
        </h1>
        <p className="mb-12 max-w-3xl text-lg font-medium leading-relaxed text-white/45 md:text-2xl">{t.intro}</p>
        <div className="mb-20 flex flex-col gap-4 sm:flex-row">
          <button className="rounded-2xl bg-brand px-10 py-5 text-sm font-black uppercase tracking-widest text-[#050505] shadow-2xl shadow-brand/20 hover:bg-brand-light">{t.primary}</button>
          <button className="liquid-glass rounded-2xl border border-white/10 px-10 py-5 text-sm font-black uppercase tracking-widest text-white/70 hover:text-white">{t.secondary}</button>
        </div>
        <div className="grid w-full grid-cols-2 gap-4 md:grid-cols-4">
          {t.stats.map(([label, value]) => <Card key={label} className="bg-white/[0.02] py-10"><div className="mb-3 text-[10px] font-black uppercase tracking-[0.25em] text-white/30">{label}</div><div className="text-4xl font-black tracking-tighter text-brand">{value}</div></Card>)}
        </div>
      </section>

      <section id="platform" className="relative z-10 mx-auto max-w-7xl border-t border-white/5 px-6 py-24">
        <div className="mb-16 text-center">
          <div className="mb-6 text-[10px] font-black uppercase tracking-[0.3em] text-brand">System Architecture</div>
          <h2 className="text-4xl font-black tracking-tighter md:text-6xl">TradingSkill AI Network</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {t.sections.map(([kicker, title, body], i) => {
            const Icon = [Network, Brain, Users, Cpu][i];
            return <Card key={title} className="min-h-72"><Icon className="mb-8 h-10 w-10 text-brand" /><div className="mb-3 text-[10px] font-black uppercase tracking-[0.28em] text-brand/70">{kicker}</div><h3 className="mb-5 text-3xl font-black tracking-tight">{title}</h3><p className="text-sm font-medium leading-relaxed text-white/40">{body}</p></Card>;
          })}
        </div>
      </section>

      <section className="relative z-10 mx-auto max-w-7xl border-t border-white/5 px-6 py-24">
        <div className="grid gap-4 md:grid-cols-3">
          {t.features.map((feature, i) => <Card key={feature} className="flex items-center gap-4"><div className="grid h-12 w-12 place-items-center rounded-xl bg-brand/10 text-brand">{i % 3 === 0 ? <ShieldCheck /> : i % 3 === 1 ? <Sparkles /> : <Zap />}</div><span className="text-sm font-black uppercase tracking-tight text-white/80">{feature}</span>{i === 5 && <BarChart3 className="ml-auto h-5 w-5 text-brand/60" />}</Card>)}
        </div>
      </section>

      <footer className="relative z-10 mx-auto flex max-w-7xl flex-col gap-6 border-t border-white/5 px-6 py-12 text-[10px] font-black uppercase tracking-[0.35em] text-white/25 md:flex-row md:items-center md:justify-between">
        <span>{t.footer}</span>
        <span className="flex items-center gap-2 text-brand"><Check className="h-3.5 w-3.5" /> Live on Vercel <ArrowRight className="h-3.5 w-3.5" /></span>
      </footer>
    </main>
  );
}
