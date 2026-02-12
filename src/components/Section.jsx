import React from 'react';

const Card = ({ item, type }) => {
    return (
        <div className="card glass-card">
            <div className="card-image">
                <img src={item.image} alt={item.name} />
            </div>
            <div className="card-content">
                <h3>{item.name}</h3>
                {type === 'hotel' && (
                    <div className="card-details">
                        <span className="price">{item.price}</span>
                        <span className="rating">⭐ {item.rating}</span>
                    </div>
                )}
                {type === 'cab' && (
                    <div className="card-details">
                        <span className="price">{item.price}</span>
                        <span className="badge">{item.type}</span>
                    </div>
                )}
                {type === 'place' && <p className="desc">{item.desc}</p>}
                <button className="btn btn-primary card-btn">Details</button>
            </div>
            <style>{`
        .card {
          overflow: hidden;
          transition: var(--transition);
          display: flex;
          flex-direction: column;
        }
        .card:hover {
          transform: translateY(-8px);
        }
        .card-image img {
          width: 100%;
          height: 200px;
          object-fit: cover;
        }
        .card-content {
          padding: 1.5rem;
          flex-grow: 1;
          display: flex;
          flex-direction: column;
        }
        .card-content h3 {
          margin-bottom: 0.5rem;
          font-size: 1.25rem;
        }
        .card-details {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-top: auto;
          margin-bottom: 1rem;
        }
        .price {
          font-weight: 700;
          color: var(--primary);
        }
        .badge {
          background: var(--background);
          padding: 0.2rem 0.6rem;
          border-radius: 4px;
          font-size: 0.8rem;
          font-weight: 600;
        }
        .desc {
          font-size: 0.95rem;
          color: var(--text-muted);
          margin-bottom: 1rem;
        }
        .card-btn {
          width: 100%;
          padding: 0.6rem;
        }
      `}</style>
        </div>
    );
};

const Section = ({ title, items, type, id }) => {
    return (
        <section id={id}>
            <div className="container">
                <h2 className="section-title">{title}</h2>
                <div className="grid">
                    {items.map((item) => (
                        <Card key={item.id} item={item} type={type} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Section;
