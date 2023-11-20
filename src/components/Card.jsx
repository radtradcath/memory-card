export default function Card({src, heroName, heroRole, id, handler}) {
  
  return (
    <button id={id} onClick={handler}>
      <div className="hero-img-container">
        <img src={src} alt={`${heroName} picture`} />
      </div>
      <p className="hero-name">{heroName}</p>
      <p className="hero-role">{heroRole}</p>      
    </button>
  );
}
