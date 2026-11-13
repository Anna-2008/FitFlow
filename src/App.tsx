import { useState } from 'react';
import { Activity, Apple, BarChart3, Plus, Dumbbell, Flame, Clock3, Target, Check } from 'lucide-react';

type Workout = { name: string; duration: string; date: string };
export default function App() {
  const [tab, setTab] = useState<'inicio'|'treinos'|'nutricao'>('inicio');
  const [workouts, setWorkouts] = useState<Workout[]>([
    { name: 'Treino de superiores', duration: '45 min', date: 'Hoje' },
    { name: 'Cardio', duration: '25 min', date: 'Ontem' }
  ]);
  const [water, setWater] = useState(3);
  const addWorkout = () => setWorkouts([{ name: 'Novo treino', duration: '30 min', date: 'Hoje' }, ...workouts]);
  return <main className="app-shell">
    <header className="topbar"><div className="brand-mark"><Dumbbell size={23}/></div><div><strong>Fit<span>Flow</span></strong><small>Treine. Controle. Evolua.</small></div><div className="avatar">FF</div></header>
    <section className="welcome"><p className="eyebrow">SEU PROGRESSO COMEÇA AQUI</p><h1>Olá! 👋<br/><span>Vamos evoluir hoje?</span></h1><p className="muted">Pequenos passos, grandes resultados.</p></section>
    <section className="stats">
      <article><Flame/><b>320</b><small>kcal hoje</small></article>
      <article><Clock3/><b>{workouts.length ? '70' : '0'} min</b><small>em atividade</small></article>
      <article><Target/><b>2 / 4</b><small>metas da semana</small></article>
    </section>
    <nav className="tabs">
      <button className={tab==='inicio'?'active':''} onClick={()=>setTab('inicio')}><Activity/>Início</button>
      <button className={tab==='treinos'?'active':''} onClick={()=>setTab('treinos')}><Dumbbell/>Treinos</button>
      <button className={tab==='nutricao'?'active':''} onClick={()=>setTab('nutricao')}><Apple/>Nutrição</button>
    </nav>
    {tab==='inicio' && <><section className="section-head"><div><p className="eyebrow">RESUMO</p><h2>Seu dia</h2></div><span className="date-pill">Hoje</span></section>
      <section className="goal-card"><div className="goal-icon"><BarChart3/></div><div className="goal-copy"><b>Meta de hidratação</b><small>{water} de 8 copos de água</small><div className="progress"><i style={{width:`${water/8*100}%`}}/></div></div><button className="plus" onClick={()=>setWater(Math.min(8,water+1))}><Plus/></button></section>
      <section className="section-head"><div><p className="eyebrow">CONSISTÊNCIA</p><h2>Atividades recentes</h2></div></section>
      <WorkoutList workouts={workouts.slice(0,2)}/></>}
    {tab==='treinos' && <><section className="section-head"><div><p className="eyebrow">MOVIMENTE-SE</p><h2>Meus treinos</h2></div><button className="add-btn" onClick={addWorkout}><Plus size={17}/> Adicionar</button></section><WorkoutList workouts={workouts}/></>}
    {tab==='nutricao' && <><section className="section-head"><div><p className="eyebrow">EQUILÍBRIO</p><h2>Controle nutricional</h2></div></section><div className="nutrition-card"><Apple size={30}/><h3>Alimente seus objetivos</h3><p>Registre suas refeições e acompanhe seus hábitos alimentares.</p><div className="nutrition-row"><span>Calorias consumidas</span><b>1.250 kcal</b></div><div className="progress"><i style={{width:'62%'}}/></div><small className="muted">Meta diária ilustrativa: 2.000 kcal</small></div></>}
    <footer>FEITO PARA SUA MELHOR VERSÃO <span>FITFLOW © 2026</span></footer>
  </main>;
}
function WorkoutList({workouts}:{workouts:Workout[]}) {
  return <div className="workout-list">{workouts.map((w,i)=><article className="workout" key={i}><div className="workout-icon"><Dumbbell/></div><div className="workout-info"><b>{w.name}</b><small>{w.date} · {w.duration}</small></div><Check className="check"/></article>)}</div>;
}