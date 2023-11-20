export default function Card({src, heroName, heroRole, id}) {
  
  return (
    <button id={id}>
      <div className="hero-img-container">
        <img src={src} alt={`${heroName} picture`} />
      </div>
      <p className="hero-role">{heroRole}</p>
      <p className="hero-name">{heroName}</p>
    </button>
  );
}
