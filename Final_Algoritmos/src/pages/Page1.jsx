const Page1 = () => {

    return(
        <div style={{ padding: '20px', backgroundColor: '#f9f9f9' }}>
            <h1 style={{ textAlign: 'center', color: '#0070f3' }}>¡Bienvenido a Mi Tienda!</h1>
            <p style={{ textAlign: 'center', fontSize: '1.2em', color: '#555' }}>
                Aquí encontrarás las últimas novedades y productos destacados.
            </p>

            <section style={{ margin: '40px 0' }}>
                <h2>Novedades</h2>
                <div className="product-grid">
                    <div className="product-card">
                        <h3>Producto 1</h3>
                        <p>Descripción breve del producto 1.</p>
                        <p><strong>Precio: $100</strong></p>
                    </div>
                    <div className="product-card">
                        <h3>Producto 2</h3>
                        <p>Descripción breve del producto 2.</p>
                        <p><strong>Precio: $150</strong></p>
                    </div>
                    <div className="product-card">
                        <h3>Producto 3</h3>
                        <p>Descripción breve del producto 3.</p>
                        <p><strong>Precio: $200</strong></p>
                    </div>
                    <div className="product-card">
                        <h3>Producto 4</h3>
                        <p>Descripción breve del producto 4.</p>
                        <p><strong>Precio: $250</strong></p>
                    </div>
                    <div className="product-card">
                        <h3>Producto 4</h3>
                        <p>Descripción breve del producto 4.</p>
                        <p><strong>Precio: $250</strong></p>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Page1;