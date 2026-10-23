import { useState } from 'react';

// DATOS DE LA LIGA (GRUPO A)
const equiposGrupoA = [
  { nombre: 'Deportivo Varese', pj: 4, g: 3, e: 1, p: 0, dg: '+4', pts: 10 },
  { nombre: 'La Vinotinto FC', pj: 3, g: 3, e: 0, p: 0, dg: '+20', pts: 9 },
  { nombre: 'Cabañas FC', pj: 3, g: 3, e: 0, p: 0, dg: '+8', pts: 9 },
  { nombre: 'Chivaburos FC', pj: 4, g: 2, e: 1, p: 1, dg: '+5', pts: 7 },
  { nombre: 'Atlético Blanquiazul', pj: 3, g: 2, e: 0, p: 1, dg: '+13', pts: 6 },
  { nombre: 'Vodka Juniors', pj: 4, g: 2, e: 0, p: 2, dg: '+9', pts: 6 },
  { nombre: 'Los Golden Boys', pj: 3, g: 2, e: 0, p: 1, dg: '+1', pts: 6 },
  { nombre: 'Cebollitas 2022', pj: 4, g: 2, e: 0, p: 2, dg: '0', pts: 6 },
  { nombre: 'Verdad & Sagrario', pj: 3, g: 1, e: 1, p: 1, dg: '+3', pts: 4 },
  { nombre: 'La Bokeroneta FC', pj: 4, g: 1, e: 1, p: 2, dg: '-2', pts: 4 },
  { nombre: 'Sport Tobati', pj: 3, g: 1, e: 0, p: 2, dg: '-4', pts: 3 },
  { nombre: 'Aston Birra FC', pj: 4, g: 0, e: 1, p: 3, dg: '-6', pts: 1 },
  { nombre: 'Real Bañil FC', pj: 4, g: 0, e: 1, p: 3, dg: '-8', pts: 1 },
  { nombre: 'Inter de Mi Casa', pj: 4, g: 0, e: 0, p: 4, dg: '-43', pts: 0 },
];

// RESULTADOS JORNADA 4
const partidosJornada4 = [
  { local: 'Chivaburos FC', visitante: 'La Bokeroneta FC', golesLocal: 3, golesVisitante: 3, estado: 'Final' },
  { local: 'Deportivo Varese', visitante: 'Cebollitas 2022', golesLocal: 4, golesVisitante: 3, estado: 'Final' },
  { local: 'Sport Tobati', visitante: 'Real Bañil FC', golesLocal: 4, golesVisitante: 2, estado: 'Final' },
  { local: 'Inter de Mi Casa', visitante: 'Verdad & Sagrario', golesLocal: 1, golesVisitante: 9, estado: 'Final' },
  { local: 'Aston Birra FC', visitante: 'Vodka Juniors', golesLocal: 0, golesVisitante: 4, estado: 'Final' },
  { local: 'Los Golden Boys', visitante: 'Atl. Blanquiazul', golesLocal: null, golesVisitante: null, estado: 'Aplazado' },
  { local: 'Cabañas FC', visitante: 'La Vinotinto FC', golesLocal: null, golesVisitante: null, estado: 'Aplazado' },
];

// CALENDARIO JORNADA 5
const calendarioJornada5 = [
  { local: 'La Vinotinto FC', visitante: 'Los Golden Boys', dia: 'Martes 27 de Octubre', hora: '21:00 HS', campo: 'Federación Malagueña' },
  { local: 'Atlético Blanquiazul', visitante: 'Aston Birra FC', dia: 'Martes 27 de Octubre', hora: '21:00 HS', campo: 'Federación Malagueña' },
  { local: 'Real Bañil FC', visitante: 'Inter de Mi Casa', dia: 'Martes 27 de Octubre', hora: '22:00 HS', campo: 'Federación Malagueña' },
  { local: 'Vodka Juniors', visitante: 'Deportivo Varese', dia: 'Miércoles 28 de Octubre', hora: '21:00 HS', campo: 'Federación Malagueña' },
  { local: 'Cebollitas 2022', visitante: 'La Bokeroneta FC', dia: 'Miércoles 28 de Octubre', hora: '21:00 HS', campo: 'Federación Malagueña' },
  { local: 'Sport Tobati', visitante: 'Chivaburos FC', dia: 'Miércoles 28 de Octubre', hora: '22:00 HS', campo: 'Federación Malagueña' },
  { local: 'Verdad & Sagrario', visitante: 'Cabañas FC', dia: 'Jueves 29 de Octubre', hora: '21:00 HS', campo: 'Federación Malagueña' },
];

export default function App() {
  const [vista, setVista] = useState('inicio');

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #1a0011 0%, #000000 100%)',
      color: 'white',
      fontFamily: 'Arial, sans-serif',
      padding: '20px'
    }}>
      {/* Menú lateral */}
      <nav style={{
        position: 'fixed', left: 0, top: 0, bottom: 0, width: '220px',
        background: '#1a1a1a', padding: '20px', borderRight: '1px solid #333'
      }}>
        <div style={{ marginBottom: '30px' }}>
          <div style={{ fontSize: '12px', color: '#888', letterSpacing: '2px' }}>GOLDEN LEAGUE</div>
          <div style={{ fontSize: '18px', fontWeight: 'bold', marginTop: '5px' }}>League desk</div>
        </div>
        
        <button onClick={() => setVista('inicio')} style={estiloBotonMenu(vista === 'inicio')}>✨ Resumen</button>
        <button onClick={() => setVista('clasificacion')} style={estiloBotonMenu(vista === 'clasificacion')}> Clasificación</button>
        <button onClick={() => setVista('partidos')} style={estiloBotonMenu(vista === 'partidos')}>⚽ Partidos</button>
        <button onClick={() => setVista('calendario')} style={estiloBotonMenu(vista === 'calendario')}>📅 Calendario</button>
      </nav>

      {/* Contenido principal */}
      <div style={{ marginLeft: '240px', padding: '40px' }}>
        {vista === 'inicio' && <VistaInicio setVista={setVista} />}
        {vista === 'clasificacion' && <VistaClasificacion />}
        {vista === 'partidos' && <VistaPartidos />}
        {vista === 'calendario' && <VistaCalendario />}
      </div>
    </div>
  );
}

function estiloBotonMenu(activo: boolean) {
  return {
    display: 'block', width: '100%', padding: '12px 15px', marginBottom: '8px',
    background: activo ? '#2a2a2a' : 'transparent', color: 'white',
    border: activo ? '1px solid #ff1493' : '1px solid transparent',
    borderRadius: '8px', cursor: 'pointer', textAlign: 'left' as const, fontSize: '15px'
  };
}

function VistaInicio({ setVista }: { setVista: (v: string) => void }) {
  return (
    <div style={{ textAlign: 'center', padding: '60px 20px' }}>
      <div style={{ fontSize: '14px', letterSpacing: '4px', color: '#888', marginBottom: '20px' }}>LIGA · TEMPORADA 2026</div>
      <h1 style={{ fontSize: '72px', margin: '0 0 20px 0', fontWeight: '900' }}>VODKA <span style={{ color: '#ff1493' }}>JUNIORS</span></h1>
      <p style={{ fontSize: '22px', color: '#ccc', marginBottom: '40px' }}>Competir es obligatorio. Ganar... <em style={{ color: '#ff1493' }}>se sirve solo.</em></p>
      <div style={{ display: 'flex', gap: '20px', justifyContent: 'center' }}>
        <button onClick={() => setVista('clasificacion')} style={{ padding: '15px 30px', background: '#ff1493', color: 'white', border: 'none', borderRadius: '30px', fontSize: '16px', fontWeight: 'bold', cursor: 'pointer' }}>Ver Clasificación</button>
        <button onClick={() => setVista('calendario')} style={{ padding: '15px 30px', background: 'transparent', color: 'white', border: '2px solid white', borderRadius: '30px', fontSize: '16px', fontWeight: 'bold', cursor: 'pointer' }}>Próximos Partidos</button>
      </div>
    </div>
  );
}

function VistaClasificacion() {
  return (
    <div>
      <h2 style={{ fontSize: '36px', marginBottom: '30px', color: '#ff1493' }}> Clasificación - Grupo A</h2>
      <div style={{ overflowX: 'auto' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', background: '#1a1a1a', borderRadius: '10px', overflow: 'hidden' }}>
          <thead>
            <tr style={{ background: '#2a2a2a', color: '#ff1493' }}>
              <th style={estiloCelda}>#</th>
              <th style={{...estiloCelda, textAlign: 'left'}}>Equipo</th>
              <th style={estiloCelda}>PJ</th>
              <th style={estiloCelda}>G</th>
              <th style={estiloCelda}>E</th>
              <th style={estiloCelda}>P</th>
              <th style={estiloCelda}>DG</th>
              <th style={{...estiloCelda, fontWeight: 'bold'}}>PTS</th>
            </tr>
          </thead>
          <tbody>
            {equiposGrupoA.map((equipo, index) => {
              const esVodka = equipo.nombre === 'Vodka Juniors';
              return (
                <tr key={index} style={{ 
                  background: esVodka ? '#2a0a1a' : (index % 2 === 0 ? '#1a1a1a' : '#222222'),
                  borderBottom: '1px solid #333'
                }}>
                  <td style={estiloCelda}>{index + 1}</td>
                  <td style={{...estiloCelda, textAlign: 'left', fontWeight: esVodka ? 'bold' : 'normal', color: esVodka ? '#ff1493' : 'white'}}>
                    {equipo.nombre} {esVodka && '⭐'}
                  </td>
                  <td style={estiloCelda}>{equipo.pj}</td>
                  <td style={estiloCelda}>{equipo.g}</td>
                  <td style={estiloCelda}>{equipo.e}</td>
                  <td style={estiloCelda}>{equipo.p}</td>
                  <td style={estiloCelda}>{equipo.dg}</td>
                  <td style={{...estiloCelda, fontWeight: 'bold', color: '#ff1493'}}>{equipo.pts}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function VistaPartidos() {
  return (
    <div>
      <h2 style={{ fontSize: '36px', marginBottom: '30px', color: '#ff1493' }}>⚽ Resultados - Jornada 4</h2>
      
      <div style={{ display: 'grid', gap: '15px' }}>
        {partidosJornada4.map((partido, index) => {
          const esVodka = partido.local === 'Vodka Juniors' || partido.visitante === 'Vodka Juniors';
          return (
            <div key={index} style={{
              background: esVodka ? '#2a0a1a' : '#1a1a1a',
              border: esVodka ? '1px solid #ff1493' : '1px solid #333',
              borderRadius: '12px',
              padding: '20px',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center'
            }}>
              <div style={{ flex: 1, textAlign: 'right', fontWeight: esVodka && partido.local === 'Vodka Juniors' ? 'bold' : 'normal', color: esVodka && partido.local === 'Vodka Juniors' ? '#ff1493' : 'white' }}>
                {partido.local}
              </div>
              
              <div style={{ padding: '0 30px', textAlign: 'center' }}>
                {partido.estado === 'Final' ? (
                  <div style={{ fontSize: '24px', fontWeight: 'bold', letterSpacing: '2px' }}>
                    {partido.golesLocal} - {partido.golesVisitante}
                  </div>
                ) : (
                  <div style={{ fontSize: '14px', color: '#888', background: '#333', padding: '5px 10px', borderRadius: '15px' }}>
                    {partido.estado}
                  </div>
                )}
              </div>

              <div style={{ flex: 1, textAlign: 'left', fontWeight: esVodka && partido.visitante === 'Vodka Juniors' ? 'bold' : 'normal', color: esVodka && partido.visitante === 'Vodka Juniors' ? '#ff1493' : 'white' }}>
                {partido.visitante}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function VistaCalendario() {
  // Agrupar partidos por día
  const partidosPorDia = calendarioJornada5.reduce((acc, partido) => {
    if (!acc[partido.dia]) acc[partido.dia] = [];
    acc[partido.dia].push(partido);
    return acc;
  }, {} as Record<string, typeof calendarioJornada5>);

  return (
    <div>
      <h2 style={{ fontSize: '36px', marginBottom: '10px', color: '#ff1493' }}>📅 Calendario - Jornada 5</h2>
      <p style={{ color: '#888', marginBottom: '40px' }}>Próximos cruces de la temporada</p>
      
      {Object.entries(partidosPorDia).map(([dia, partidos]) => (
        <div key={dia} style={{ marginBottom: '40px' }}>
          <h3 style={{ 
            fontSize: '20px', 
            color: '#ff1493', 
            marginBottom: '20px',
            paddingBottom: '10px',
            borderBottom: '2px solid #ff1493',
            display: 'inline-block'
          }}>
            {dia}
          </h3>
          
          <div style={{ display: 'grid', gap: '12px' }}>
            {partidos.map((partido, index) => {
              const esVodka = partido.local === 'Vodka Juniors' || partido.visitante === 'Vodka Juniors';
              return (
                <div key={index} style={{
                  background: esVodka ? '#2a0a1a' : '#1a1a1a',
                  border: esVodka ? '2px solid #ff1493' : '1px solid #333',
                  borderRadius: '12px',
                  padding: '20px',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center'
                }}>
                  <div style={{ flex: 1, textAlign: 'right', fontWeight: esVodka && partido.local === 'Vodka Juniors' ? 'bold' : 'normal', color: esVodka && partido.local === 'Vodka Juniors' ? '#ff1493' : 'white' }}>
                    {partido.local}
                  </div>
                  
                  <div style={{ padding: '0 20px', textAlign: 'center', minWidth: '120px' }}>
                    <div style={{ fontSize: '14px', color: '#ff1493', fontWeight: 'bold' }}>
                      {partido.hora}
                    </div>
                    <div style={{ fontSize: '11px', color: '#888', marginTop: '3px' }}>
                      {partido.campo}
                    </div>
                  </div>

                  <div style={{ flex: 1, textAlign: 'left', fontWeight: esVodka && partido.visitante === 'Vodka Juniors' ? 'bold' : 'normal', color: esVodka && partido.visitante === 'Vodka Juniors' ? '#ff1493' : 'white' }}>
                    {partido.visitante}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
}

const estiloCelda = {
  padding: '12px 15px',
  textAlign: 'center' as const,
  color: '#ccc',
  fontSize: '14px'
};