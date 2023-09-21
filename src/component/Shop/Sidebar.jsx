import React from 'react';

const Sidebar = () => {
    return (
        <>
            {/* left section  */}
            <div className="col-3  pe-2 d-none d-lg-block d-xl-block d-xxl-block ">        
            <ol className="list-group list-group">
                {/* mans item */}
                <li className="list-group-item ">
                <div className="d-flex justify-content-between">
                    <div className="form-check">
                    <input className="form-check-input" type="checkbox" defaultValue id="mens" />
                    <label className="form-check-label text-info fw-bold" htmlFor="mens" style={{cursor: 'pointer', userSelect: 'none'}}>
                        Mens
                    </label>
                    </div>
                    <span className="badge bg-secondary">526</span>
                </div>
                {/* list 1 */}
                <div>
                    <div className="ms-2 mt-1">
                    <div className="d-flex justify-content-between">
                        <div className="form-check">
                        <input className="form-check-input" type="checkbox" defaultValue id="blank" />
                        <label className="form-check-label text-dark fw-bold" htmlFor="blank" style={{cursor: 'pointer', userSelect: 'none'}}>
                            Half Sleeve T-Shirt
                        </label>
                        </div>
                        <span className="badge bg-secondary">102</span>
                    </div>
                    </div>
                    <ul className="list-unstyled ms-3">
                    {/* L 1 */}
                    <li className="mt-1">
                        <div className="d-flex justify-content-between">
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" defaultValue id="stitch" />
                            <label className="form-check-label text-dark " htmlFor="stitch" style={{cursor: 'pointer', userSelect: 'none'}}>
                            Cut &amp; Stitch
                            </label>
                        </div>
                        <span className="badge bg-secondary">35</span>
                        </div>                    
                    </li>
                    {/* L 2 */}
                    <li className="mt-1">
                        <div className="d-flex justify-content-between">
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" defaultValue id="designer" />
                            <label className="form-check-label text-dark " htmlFor="designer" style={{cursor: 'pointer', userSelect: 'none'}}>
                            Cut &amp; Stitch (Designer Edition)
                            </label>
                        </div>
                        <span className="badge bg-secondary">35</span>
                        </div>                    
                    </li>
                    {/* L 3 */}
                    <li className="mt-1">
                        <div className="d-flex justify-content-between">
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" defaultValue id="raglan1" />
                            <label className="form-check-label text-dark " htmlFor="raglan1" style={{cursor: 'pointer', userSelect: 'none'}}>
                            Raglan (Designer Edition)
                            </label>
                        </div>
                        <span className="badge bg-secondary">57</span>
                        </div>                    
                    </li>
                    </ul>
                </div>
                {/* list 2 */}
                <div>
                    <div className="ms-2 mt-1">
                    <div className="d-flex justify-content-between">
                        <div className="form-check">
                        <input className="form-check-input" type="checkbox" defaultValue id="blank1" />
                        <label className="form-check-label text-dark fw-bold" htmlFor="blank1" style={{cursor: 'pointer', userSelect: 'none'}}>
                            Half Sleeve T-Shirt
                        </label>
                        </div>
                        <span className="badge bg-secondary">102</span>
                    </div>
                    </div>
                    <ul className="list-unstyled ms-3">
                    {/* L 1 */}
                    <li className="mt-1">
                        <div className="d-flex justify-content-between">
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" defaultValue id="stitch3" />
                            <label className="form-check-label text-dark " htmlFor="stitch3" style={{cursor: 'pointer', userSelect: 'none'}}>
                            Cut &amp; Stitch
                            </label>
                        </div>
                        <span className="badge bg-secondary">35</span>
                        </div>                    
                    </li>
                    {/* L 2 */}
                    <li className="mt-1">
                        <div className="d-flex justify-content-between">
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" defaultValue id="designer2" />
                            <label className="form-check-label text-dark " htmlFor="designer2" style={{cursor: 'pointer', userSelect: 'none'}}>
                            Cut &amp; Stitch (Designer Edition)
                            </label>
                        </div>
                        <span className="badge bg-secondary">35</span>
                        </div>                    
                    </li>
                    {/* L 3 */}
                    <li className="mt-1">
                        <div className="d-flex justify-content-between">
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" defaultValue id="aglan" />
                            <label className="form-check-label text-dark " htmlFor="aglan" style={{cursor: 'pointer', userSelect: 'none'}}>
                            Raglan (Designer Edition)
                            </label>
                        </div>
                        <span className="badge bg-secondary">57</span>
                        </div>                    
                    </li>                  
                    </ul>
                </div>
                </li>
                {/* Girls item */}
                <li className="list-group-item ">
                <div className="d-flex justify-content-between">
                    <div className="form-check">
                    <input className="form-check-input" type="checkbox" defaultValue id="omens" />
                    <label className="form-check-label text-info fw-bold" htmlFor="omens" style={{cursor: 'pointer', userSelect: 'none'}}>
                        Womens
                    </label>
                    </div>
                    <span className="badge bg-secondary">626</span>
                </div>
                {/* list 1 */}
                <div>
                    <div className="ms-2 mt-1">
                    <div className="d-flex justify-content-between">
                        <div className="form-check">
                        <input className="form-check-input" type="checkbox" defaultValue id="hirt" />
                        <label className="form-check-label text-dark fw-bold" htmlFor="hirt" style={{cursor: 'pointer', userSelect: 'none'}}>
                            T-Shirt
                        </label>
                        </div>
                        <span className="badge bg-secondary">102</span>
                    </div>
                    </div>
                    <ul className="list-unstyled ms-3">
                    {/* L 1 */}
                    <li className="mt-1">
                        <div className="d-flex justify-content-between">
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" defaultValue id="Trouser" />
                            <label className="form-check-label text-dark " htmlFor="Trouser" style={{cursor: 'pointer', userSelect: 'none'}}>
                            Comfy Trouser
                            </label>
                        </div>
                        <span className="badge bg-secondary">605</span>
                        </div>                    
                    </li>
                    {/* L 2 */}
                    <li className="mt-1">
                        <div className="d-flex justify-content-between">
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" defaultValue id="Tunic" />
                            <label className="form-check-label text-dark " htmlFor="Tunic" style={{cursor: 'pointer', userSelect: 'none'}}>
                            Kurti Tunic And Tops
                            </label>
                        </div>
                        <span className="badge bg-secondary">105</span>
                        </div>                    
                    </li>
                    {/* L 3 */}
                    <li className="mt-1">
                        <div className="d-flex justify-content-between">
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" defaultValue id="Sleeve" />
                            <label className="form-check-label text-dark " htmlFor="Sleeve" style={{cursor: 'pointer', userSelect: 'none'}}>
                            Half Sleeve T-Shirt
                            </label>
                        </div>
                        <span className="badge bg-secondary">57</span>
                        </div>                    
                    </li>
                    </ul>
                </div>            
                </li>
                {/* Face Mask item */}
                <li className="list-group-item ">
                <div className="d-flex justify-content-between">
                    <div className="form-check">
                    <input className="form-check-input" type="checkbox" defaultValue id="Mask" />
                    <label className="form-check-label text-info fw-bold" htmlFor="Mask" style={{cursor: 'pointer', userSelect: 'none'}}>
                        Face Mask
                    </label>
                    </div>
                    <span className="badge bg-secondary">626</span>
                </div>
                {/* list 1 */}
                <div>
                    <div className="ms-2 mt-1">
                    <div className="d-flex justify-content-between">
                        <div className="form-check">
                        <input className="form-check-input" type="checkbox" defaultValue id="hirt" />
                        <label className="form-check-label text-dark fw-bold" htmlFor="hirt" style={{cursor: 'pointer', userSelect: 'none'}}>
                            T-Shirt
                        </label>
                        </div>
                        <span className="badge bg-secondary">102</span>
                    </div>
                    </div>
                    <ul className="list-unstyled ms-3">
                    {/* L 1 */}
                    <li className="mt-1">
                        <div className="d-flex justify-content-between">
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" defaultValue id="Trouser" />
                            <label className="form-check-label text-dark " htmlFor="Trouser" style={{cursor: 'pointer', userSelect: 'none'}}>
                            Comfy Trouser
                            </label>
                        </div>
                        <span className="badge bg-secondary">605</span>
                        </div>                    
                    </li>
                    {/* L 2 */}
                    <li className="mt-1">
                        <div className="d-flex justify-content-between">
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" defaultValue id="Tunic" />
                            <label className="form-check-label text-dark " htmlFor="Tunic" style={{cursor: 'pointer', userSelect: 'none'}}>
                            Kurti Tunic And Tops
                            </label>
                        </div>
                        <span className="badge bg-secondary">105</span>
                        </div>                    
                    </li>
                    {/* L 3 */}
                    <li className="mt-1">
                        <div className="d-flex justify-content-between">
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" defaultValue id="Sleeve" />
                            <label className="form-check-label text-dark " htmlFor="Sleeve" style={{cursor: 'pointer', userSelect: 'none'}}>
                            Half Sleeve T-Shirt
                            </label>
                        </div>
                        <span className="badge bg-secondary">57</span>
                        </div>                    
                    </li>
                    </ul>
                </div>            
                </li>
                <li className="list-group-item ">
                <div className="d-flex justify-content-between">
                    <div className="form-check">
                    <input className="form-check-input" type="checkbox" defaultValue id="omens" />
                    <label className="form-check-label text-info fw-bold" htmlFor="omens" style={{cursor: 'pointer', userSelect: 'none'}}>
                        Womens
                    </label>
                    </div>
                    <span className="badge bg-secondary">626</span>
                </div>
                {/* list 1 */}
                <div>
                    <div className="ms-2 mt-1">
                    <div className="d-flex justify-content-between">
                        <div className="form-check">
                        <input className="form-check-input" type="checkbox" defaultValue id="hirt" />
                        <label className="form-check-label text-dark fw-bold" htmlFor="hirt" style={{cursor: 'pointer', userSelect: 'none'}}>
                            T-Shirt
                        </label>
                        </div>
                        <span className="badge bg-secondary">102</span>
                    </div>
                    </div>
                    <ul className="list-unstyled ms-3">
                    {/* L 1 */}
                    <li className="mt-1">
                        <div className="d-flex justify-content-between">
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" defaultValue id="Trouser" />
                            <label className="form-check-label text-dark " htmlFor="Trouser" style={{cursor: 'pointer', userSelect: 'none'}}>
                            Comfy Trouser
                            </label>
                        </div>
                        <span className="badge bg-secondary">605</span>
                        </div>                    
                    </li>
                    {/* L 2 */}
                    <li className="mt-1">
                        <div className="d-flex justify-content-between">
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" defaultValue id="Tunic" />
                            <label className="form-check-label text-dark " htmlFor="Tunic" style={{cursor: 'pointer', userSelect: 'none'}}>
                            Kurti Tunic And Tops
                            </label>
                        </div>
                        <span className="badge bg-secondary">105</span>
                        </div>                    
                    </li>
                    {/* L 3 */}
                    <li className="mt-1">
                        <div className="d-flex justify-content-between">
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" defaultValue id="Sleeve" />
                            <label className="form-check-label text-dark " htmlFor="Sleeve" style={{cursor: 'pointer', userSelect: 'none'}}>
                            Half Sleeve T-Shirt
                            </label>
                        </div>
                        <span className="badge bg-secondary">57</span>
                        </div>                    
                    </li>
                    </ul>
                </div>            
                </li>
                {/* Face Mask item */}
                <li className="list-group-item ">
                <div className="d-flex justify-content-between">
                    <div className="form-check">
                    <input className="form-check-input" type="checkbox" defaultValue id="Mask" />
                    <label className="form-check-label text-info fw-bold" htmlFor="Mask" style={{cursor: 'pointer', userSelect: 'none'}}>
                        Face Mask
                    </label>
                    </div>
                    <span className="badge bg-secondary">626</span>
                </div>
                {/* list 1 */}
                <div>
                    <div className="ms-2 mt-1">
                    <div className="d-flex justify-content-between">
                        <div className="form-check">
                        <input className="form-check-input" type="checkbox" defaultValue id="hirt" />
                        <label className="form-check-label text-dark fw-bold" htmlFor="hirt" style={{cursor: 'pointer', userSelect: 'none'}}>
                            T-Shirt
                        </label>
                        </div>
                        <span className="badge bg-secondary">102</span>
                    </div>
                    </div>
                    <ul className="list-unstyled ms-3">
                    {/* L 1 */}
                    <li className="mt-1">
                        <div className="d-flex justify-content-between">
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" defaultValue id="Trouser" />
                            <label className="form-check-label text-dark " htmlFor="Trouser" style={{cursor: 'pointer', userSelect: 'none'}}>
                            Comfy Trouser
                            </label>
                        </div>
                        <span className="badge bg-secondary">605</span>
                        </div>                    
                    </li>
                    {/* L 2 */}
                    <li className="mt-1">
                        <div className="d-flex justify-content-between">
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" defaultValue id="Tunic" />
                            <label className="form-check-label text-dark " htmlFor="Tunic" style={{cursor: 'pointer', userSelect: 'none'}}>
                            Kurti Tunic And Tops
                            </label>
                        </div>
                        <span className="badge bg-secondary">105</span>
                        </div>                    
                    </li>
                    {/* L 3 */}
                    <li className="mt-1">
                        <div className="d-flex justify-content-between">
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" defaultValue id="Sleeve" />
                            <label className="form-check-label text-dark " htmlFor="Sleeve" style={{cursor: 'pointer', userSelect: 'none'}}>
                            Half Sleeve T-Shirt
                            </label>
                        </div>
                        <span className="badge bg-secondary">57</span>
                        </div>                    
                    </li>
                    </ul>
                </div>            
                </li>
            </ol>
            {/* tag section  */}
            <div className="d-flex flex-wrap my-3 gap-1">
                <a href="#" className="text-decoration-none"><span className="badge bg-dark border border-primary ">premium</span></a>
                <a href="#" className="text-decoration-none"><span className="badge bg-dark border border-primary ">New</span></a>
                <a href="#" className="text-decoration-none"><span className="badge bg-dark border border-primary ">premium</span></a>
                <a href="#" className="text-decoration-none"><span className="badge bg-dark border border-primary ">Charcoal</span></a>
                <a href="#" className="text-decoration-none"><span className="badge bg-dark border border-primary ">Tshart</span></a>
                <a href="#" className="text-decoration-none"><span className="badge bg-dark border border-primary ">Black</span></a>
                <a href="#" className="text-decoration-none"><span className="badge bg-dark border border-primary ">Combo</span></a>
                <a href="#" className="text-decoration-none"><span className="badge bg-dark border border-primary ">Anthramelange</span></a>
            </div>
            </div>
            {/* left section end  */}
 
        </>
    );
};

export default Sidebar;