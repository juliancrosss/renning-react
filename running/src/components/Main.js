import React, { Component } from 'react';

class Main extends Component {
  render() {
    return (
      <main id="wrapper-content">
        {/*<!-- nav -->*/}
        <nav className="mod__nav">
          <div className="container">
            <div className="row d-flex flex-row">
              <div className="col-md-4 col-xs-12">
                <div className="mod__nav_list">
                  <ul className="list-inline mod__nav--social d-flex flex-row">
                    <li className="list-inline-item">SIGUENOS EN: 
                      <a href="#"><i className="fa fa-facebook"></i></a>
                      <a href="#"><i className="fa fa-twitter"></i></a> 
                      <a href="#"><i className="fa fa-whatsapp"></i></a>
                    </li> 
                  </ul>
                </div>
              </div>
              <div className="col-md-8 col-xs-12">
                <div className="mod__nav_list">
                  <ul className="list-inline mod__nav_list--spacing d-flex justify-content-end">
                    <li className="list-inline-item"><a href="#" className="text-xs-right">ACCESORIOS</a></li> 
                    <li className="list-inline-item"><a href="#" className="text-xs-right">ROPA</a></li>
                    <li className="list-inline-item"><a href="#" className="text-xs-right">CALZADO</a></li>
                    <li className="list-inline-item"><a href="#" className="text-xs-right">MÁQUINAS</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </nav>
        {/*<!-- end ./nav -->*/}
        {/*<!-- header -->*/}
        <header className="mod__header">
          <div className="container-fluid">
            <div className="row">
              <div className="col-xs-12 thumbnail text-center">
                <img src="http://lorempixel.com/1920/500/sports/1/" alt="running" title="running" className="img-fluid" />
                <div className="caption">
                  <h2>RUNN<span>I</span>NG</h2>
                </div>
              </div>
            </div>
          </div>
        </header>
        {/*<!-- /.end header -->*/}
        {/*<!-- categories -->*/}
        <section className="mod__categories">
          <div className="container">
            <div className="row d-flex justify-content-end">
              <div className="col-xs-12 col-md-3 thumbnail">
                <img src="http://lorempixel.com/500/940/sports/" alt="running" title="running" className="img-fluid" />
                <div className="caption">
                  <h2>ROPA</h2>
                  <p>MUJER / HOMBRE</p>
                </div>
              </div>
              <div className="col-xs-12 col-md-3 thumbnail">
                <img src="http://lorempixel.com/500/940/fashion/" alt="running" title="running" className="img-fluid" />
                <div className="caption">
                  <h2>CALZADO</h2>
                  <p>MUJER / HOMBRE</p>
                </div>
              </div>
              <div className="col-xs-12 col-md-3 thumbnail">
                <img src="http://lorempixel.com/500/940/food/" alt="running" title="running" className="img-fluid" />
                <div className="caption">
                  <h2>ACCESORIOS</h2>
                  {/*<!--<p>Lorem ipsum dolor sit amet</p>-->*/}
                </div>
              </div>
              <div className="col-xs-12 col-md-3 thumbnail">
                <img src="http://lorempixel.com/500/940/cats/" alt="running" title="running" className="img-fluid" />
                <div className="caption">
                  <h2>MÁQUINAS</h2>
                  {/*<!--<p>Lorem ipsum dolor sit amet</p>-->*/}
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*<!--/. end categories -->*/}
        {/*<!-- products -->]*/}
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-md-12 outfit">
              <section className="mod__carrusel mod__selers clearfix">
                <div className="header">
                  <h5>Establece tu outfit</h5>  
                 </div>
                <div className="mod__carrusel_inner" id="carruselBox0"></div>
              </section>
            </div>
          </div>
        </div>

        {/*<!-- ./ end products -->*/}
        {/*<!-- Brands -->*/}
        <section className="mod__brands">
          <div className="container">
            <div className="row">
              <div className="col-xs-12 col-md-12">
                <div className="row mod__brands_header">
                  <div className="col-xs-12 col-md-12">
                    <h5>Marcas destacadas</h5>
                  </div>
                </div>

                <div className="row mod__brands_brands">

                  <div className="col-xs-12 col-md-3 mod__brands_brand_description">
                    <div className="mod__brands_img">
                      <a href="http://www.falabella.com/falabella-cl/category/cat9410001/Ver-Todo-Zapatos-Mujer/N-38ju?mkid=BO_MD_MADC_012241">
                        <img src="http://falabella.scene7.com/is/image/Falabella/brand_clarks?$M250x250$" className="img-fluid" />
                      </a>
                    </div>
                  </div>
                  <div className="col-xs-12 col-md-3 mod__brands_brand_description">
                    <div className="mod__brands_img">
                      <a href="http://www.falabella.com/falabella-cl/category/cat9410001/Ver-Todo-Zapatos-Mujer/N-38ju?mkid=BO_MD_MADC_012241">
                        <img src="http://falabella.scene7.com/is/image/Falabella/brand_clarks?$M250x250$" className="img-fluid" />
                      </a>
                    </div>
                  </div>
                  <div className="col-xs-12 col-md-3 mod__brands_brand_description">
                    <div className="mod__brands_img">
                      <a href="http://www.falabella.com/falabella-cl/category/cat9410001/Ver-Todo-Zapatos-Mujer/N-38ju?mkid=BO_MD_MADC_012241">
                        <img src="http://falabella.scene7.com/is/image/Falabella/brand_clarks?$M250x250$" className="img-fluid" />
                      </a>
                    </div>
                  </div>
                  <div className="col-xs-12 col-md-3 mod__brands_brand_description">
                    <div className="mod__brands_img">
                      <a href="http://www.falabella.com/falabella-cl/category/cat9410001/Ver-Todo-Zapatos-Mujer/N-38ju?mkid=BO_MD_MADC_012241">
                        <img src="http://falabella.scene7.com/is/image/Falabella/brand_clarks?$M250x250$" className="img-fluid" />
                      </a>
                    </div>
                  </div>

                </div>

                <div className="row mod__brands_brands">

                  <div className="col-xs-12 col-md-3 mod__brands_brand_description">
                    <div className="mod__brands_img">
                      <a href="http://www.falabella.com/falabella-cl/category/cat9410001/Ver-Todo-Zapatos-Mujer/N-38ju?mkid=BO_MD_MADC_012241">
                        <img src="http://falabella.scene7.com/is/image/Falabella/brand_clarks?$M250x250$" className="img-fluid" />
                      </a>
                    </div>
                  </div>
                  <div className="col-xs-12 col-md-3 mod__brands_brand_description">
                    <div className="mod__brands_img">
                      <a href="http://www.falabella.com/falabella-cl/category/cat9410001/Ver-Todo-Zapatos-Mujer/N-38ju?mkid=BO_MD_MADC_012241">
                        <img src="http://falabella.scene7.com/is/image/Falabella/brand_clarks?$M250x250$" className="img-fluid" />
                      </a>
                    </div>
                  </div>
                  <div className="col-xs-12 col-md-3 mod__brands_brand_description">
                    <div className="mod__brands_img">
                      <a href="http://www.falabella.com/falabella-cl/category/cat9410001/Ver-Todo-Zapatos-Mujer/N-38ju?mkid=BO_MD_MADC_012241">
                        <img src="http://falabella.scene7.com/is/image/Falabella/brand_clarks?$M250x250$" className="img-fluid" />
                      </a>
                    </div>
                  </div>
                  <div className="col-xs-12 col-md-3 mod__brands_brand_description">
                    <div className="mod__brands_img">
                      <a href="http://www.falabella.com/falabella-cl/category/cat9410001/Ver-Todo-Zapatos-Mujer/N-38ju?mkid=BO_MD_MADC_012241">
                        <img src="http://falabella.scene7.com/is/image/Falabella/brand_clarks?$M250x250$" className="img-fluid" />
                      </a>
                    </div>
                  </div>

                </div>

                <div className="row mod__brands_footer d-flex  justify-content-center">
                  <div className="col-xs-12 col-md-12">
                    <h5 className="text-center"><i className="fa fa-plus" aria-hidden="true"></i> VER TODAS LAS MARCAS</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*<!-- ./ end brands -->*/}
        {/*<!-- Trends -->*/}
        <section className="mod__trends">
          <div className="container">
            <div className="row d-flex">
              <div className="col-xs-12 col-md-6 align-self-center">
                <div className="mod__trends_content mod__trends_content--relative">
                  <a href="http://www.falabella.com/falabella-cl/page/2en1?staticPageId=100060">
                    <img src="http://falabella.scene7.com/is/image/Falabella/Trends_Hero-2en1-200317-JP?$M1024x584$" className="img-fluid" />
                  </a>
                </div>
              </div>
              <div className="col-xs-12 col-md-6 align-self-start mod__trends_content_consejos">
                <div className="mod__trends_content mod__trends_content--absolute">
                  <div id="diamond"></div>
                  <div className="mod__trends_content_header">
                    <h4>CONSEJOS PARA <span>CORRER</span></h4>
                  </div>
                  <div className="mod__trends_content_description">
                    <p>¿Estás siempre conectado?, ¿trabajas desde tu casa? o ¿todavía no entiendes mucho de computadores? ¡No te preocupes! Aquí encontrarás el dispositivo perfecto para ti según tus necesidades.</p>
                    <button type="button" className="btn">LEER CONSEJOS</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*<!-- ./ end Trends -->*/}
        <section className="mod__cards">
          <div className="container">
            <div className="row">
              <div className="col-xs-12 col-md-12">
                <div className="row mod__cards_row" id="mod__cards_row">

                  <div className="col-xs-6 col-md-3 mod__card_content">
                    <div className="mod__cards_head">
                      <a href="http://www.falabella.com/falabella-cl/category/cat6640053/Como-elegir-un-notebook">
                        <img src="http://falabella.scene7.com/is/image/Falabella/GPTC_Computacion-010317-MJ-2?$M320x240$" className="img-fluid" />
                      </a>
                    </div>
                    <div className="mod__cards_description">
                      <div className="mod__cards_description_head">
                        <h6>BOGOTA, MEDELLIN Y CALI ¿EN DONDE QIOERES CORRER?</h6>
                      </div>
                      <div className="mod__cards_description_content">
                        <p>
                          En este articulo te mostraremos esos lugares que no puedes dejar de conocer 
                        </p>
                      </div>
                      <div className="mod__cards_description_link">
                        <button type="button" className="btn"><span>VER</span> CONTENIDO <i className="fa fa-arrow-right" aria-hidden="true"></i></button>
                      </div>
                    </div>
                  </div>

                  <div className="col-xs-6 col-md-3 mod__card_content">
                    <div className="mod__cards_head">
                      <a href="http://www.falabella.com/falabella-cl/category/cat6640053/Como-elegir-un-notebook">
                        <img src="http://falabella.scene7.com/is/image/Falabella/GPTC_Computacion-010317-MJ-2?$M320x240$" className="img-fluid" />
                      </a>
                    </div>
                    <div className="mod__cards_description">
                      <div className="mod__cards_description_head">
                        <h6>BOGOTA, MEDELLIN Y CALI ¿EN DONDE QIOERES CORRER?</h6>
                      </div>
                      <div className="mod__cards_description_content">
                        <p>
                          En este articulo te mostraremos esos lugares que no puedes dejar de conocer 
                        </p>
                      </div>
                      <div className="mod__cards_description_link">
                        <button type="button" className="btn"><span>VER</span> CONTENIDO <i className="fa fa-arrow-right" aria-hidden="true"></i></button>
                      </div>
                    </div>
                  </div>

                  <div className="col-xs-6 col-md-3 mod__card_content">
                    <div className="mod__cards_head">
                      <a href="http://www.falabella.com/falabella-cl/category/cat6640053/Como-elegir-un-notebook">
                        <img src="http://falabella.scene7.com/is/image/Falabella/GPTC_Computacion-010317-MJ-2?$M320x240$" className="img-fluid" />
                      </a>
                    </div>
                    <div className="mod__cards_description">
                      <div className="mod__cards_description_head">
                        <h6>BOGOTA, MEDELLIN Y CALI ¿EN DONDE QIOERES CORRER?</h6>
                      </div>
                      <div className="mod__cards_description_content">
                        <p>
                          En este articulo te mostraremos esos lugares que no puedes dejar de conocer 
                        </p>
                      </div>
                      <div className="mod__cards_description_link">
                        <button type="button" className="btn"><span>VER</span> CONTENIDO <i className="fa fa-arrow-right" aria-hidden="true"></i></button>
                      </div>
                    </div>
                  </div>

                  <div className="col-xs-6 col-md-3 mod__card_content">
                    <div className="mod__cards_head">
                      <a href="http://www.falabella.com/falabella-cl/category/cat6640053/Como-elegir-un-notebook">
                        <img src="http://falabella.scene7.com/is/image/Falabella/GPTC_Computacion-010317-MJ-2?$M320x240$" className="img-fluid" />
                      </a>
                    </div>
                    <div className="mod__cards_description">
                      <div className="mod__cards_description_head">
                        <h6>BOGOTA, MEDELLIN Y CALI ¿EN DONDE QIOERES CORRER?</h6>
                      </div>
                      <div className="mod__cards_description_content">
                        <p>
                          En este articulo te mostraremos esos lugares que no puedes dejar de conocer 
                        </p>
                      </div>
                      <div className="mod__cards_description_link">
                        <button type="button" className="btn"><span>VER</span> CONTENIDO <i className="fa fa-arrow-right" aria-hidden="true"></i></button>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    );
  }
}

export default Main;