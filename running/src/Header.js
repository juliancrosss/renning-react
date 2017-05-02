import React, { Component } from 'react';

class Header extends Component {
  render() {
    return(
      <header>
        {/*<!-- Header holding Falabella -->*/}
        <div className="corporate-header-container">
            <div className="corporate-header-inner-container">
                <a href="http://www.falabella.com.co" className="corporate-header-item item-falabella">Falabella</a>
                <a href="http://www.bancofalabella.com.co/" className="corporate-header-item item-banco">Banco Falabella</a>
                <a href="http://www.viajesfalabella.com.co/?utm_source=FALABELLA_PERF-DISPLAY&amp;utm_medium=ALWAYSON_GENERICO&amp;utm_campaign=TODOS_GENERICO_BANNER_GENERICO" className="corporate-header-item item-viajes">Viajes Falabella</a>
                <a href="http://www.segurosfalabella.com.co/web/seguroscolombia/home" className="corporate-header-item item-seguros"></a>
                <a href="http://www.homecenter.com.co/homecenter-co/" className="corporate-header-item item-homecenter">Homecenter</a>
            </div>
        </div>
        {/*<!-- Header Falabella.com -->*/}
        <div className="falabella-header-container">
            <div className="falabella-header-inner-container">
                <div className="logo-container">
                    <a href="http://www.falabella.com.co" className="falabella-home"></a>
                </div>
                <div className="search-container">
                    <input type="text" placeholder="Buscar" />
                    <button className="search-button" id="search-button"><span className="search-button-image"></span></button>
                </div>
                <div className="shopping-cart-container">
                    <a href="http://www.falabella.com.co/falabella-co/cart/ .jsp" className="shopping-cart-link">
                        <h4>Bolsa de compras</h4>
                        <p><span className="products-count">0</span> productos</p>
                    </a>
                </div>
            </div>
            <div className="mobile-falabella-header-innner-container">
                <div className="top-menu-container">
                    <div className="logo-container">
                        <a href="http://www.falabella.com.co" className="falabella-home">
                            <img src="assets/images/logo_co2.png" />
                        </a>
                    </div>
                    <div className="home-container">
                        <a href="http://www.falabella.com.co" className="home-link">
                            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFgAAABgCAYAAACZvLX0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA2hpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYxIDY0LjE0MDk0OSwgMjAxMC8xMi8wNy0xMDo1NzowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDpGRTdGMTE3NDA3MjA2ODExQUEzRjlGNTcyMTc1NjQxRiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpGQzMzMDU2N0QxNDkxMUUyOTE4NUU3NEVEQUZERTg2MyIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpGQzMzMDU2NkQxNDkxMUUyOTE4NUU3NEVEQUZERTg2MyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ1M1LjEgTWFjaW50b3NoIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6RkM4OTQxQzQxMDIwNjgxMThBNkRFOTE0QTNBRTQ4NzEiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6RkU3RjExNzQwNzIwNjgxMUFBM0Y5RjU3MjE3NTY0MUYiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz6cnbvHAAADvUlEQVR42uycQWvUQBTHk7QF0YO0J49SxfvaIlQ9eNgexJOH7RcQdi2eFKT1E9iCeBGFrt+ge9CDBcEi9CCLYOld6N4V6YIXRbHxBV/wGZJN1uwkeZP/H/4sSWcms7+dvJk3m63r+74DmZMHBAAMwBAAAzAAQwAMwAAMATAAQwAMwAAMZdR03gb6fXfSfbpGfk5+S14lH5sEsLTkVxuwAbgvyafJ58lT5LZpyHUJERJuqFvkruZQVpWOX46BKyE/BeB8cF8lwA11m/wMgP8f7myGsqsaIXtK4KqF7CmCqxKypwyuOsieQriqIE8rhSshu/wa6myQoHGS4vPff3Fm+MlWwCbgyiWcIyA/Jt+MKfeIfN/GEGESbtw6eSahzEkbQ0QRcGW4+D4C8LFtgIuEG+oux13rVxFlwA3l2g64TLjWr4MB1yBgwDUIWAPcn1oBaxm5F9QB7vddTWHhRhl7F14OuEsKY27hG0ReDrg7Sie0QiF7NYNbOGSvhnD/gUzvya0EYOrIFYvgSshPqjKCX1iaRNwx2fg4u2nBRvZi5Fywc3WGfFUByC/kvZjzQ5MXdfP+VplCxyV6ea8A8Gvy9ehJ0w//TSKTO1GzbYHqX7ROAmDDmlbQx4/ke+RvI8pcJD+s4vvRAHiP19+j9I78gDyHEGFmEJxCDMYkBwEwAEMADMAADAEwAAMwVB3Aph8XncpYbmYCKXcpeX6afpCPDPbxa4YywdcSn53Rz58dlQHYxb+3RQwGYAiAARiAoXKWaY1GI1yG7JKXczS1xu6Qe0XXPzg4sH4Ebzh/nn1rl1TfesAdvgvWS6pf2UxuUuqyy6qvagQ3OX31RXx8w8eHfByX7vpcN6rgtt/mdNfnttbGqB+c2+Jrh33YSiirbgR/IC+I43kRL7PczlsxcbXJbvHEOuoR1Da34UT60GZ3TI78omJwACHYdTtH3udzrYwrgxBu8GHMcTsrDLWbArcp4AYri0XRj574AJuaAS/z5BNoQN4UoygL4BDupoDZY0hpI68tlpAr4sMd8PFupJxKwMOU4yQtOH9/stDL0G7SCHZGrIt7kXK1yuTk70EGOdtIqj+IuVZtAA8jk1KeNpLqz495V1kFeF+MsFbKCE/SbsqE2koJIVYDdsQktsET3qwAc5hhcuqKGLstRuw8HzfrDngzAjlMNLbFvsNsygjuRD6UMNFoRVLsWgIOAYQ7ZEMBbp3XtcMMo3iRXwdicpPnjQlfeirdi4AAGIABGAJgAAZgCIABGIAhAFaq3wIMAMDb1dqJhRKaAAAAAElFTkSuQmCC" />
                        </a>
                    </div>
                    <div className="stores-container">
                        <a href="http://m.falabella.com.co/mt/www.falabella.com.co/falabella-co/static/staticContent1.jsp?active=0&amp;id=cat111175&amp;un_jtt_v_hd=383" className="stores-link">
                            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAF4AAABgCAYAAACUosWzAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA2hpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYxIDY0LjE0MDk0OSwgMjAxMC8xMi8wNy0xMDo1NzowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDpGRTdGMTE3NDA3MjA2ODExQUEzRjlGNTcyMTc1NjQxRiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpGQzMzMDU2QkQxNDkxMUUyOTE4NUU3NEVEQUZERTg2MyIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpGQzMzMDU2QUQxNDkxMUUyOTE4NUU3NEVEQUZERTg2MyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ1M1LjEgTWFjaW50b3NoIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6RkI4OTQxQzQxMDIwNjgxMThBNkRFOTE0QTNBRTQ4NzEiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6RkU3RjExNzQwNzIwNjgxMUFBM0Y5RjU3MjE3NTY0MUYiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz40tjKVAAAD4ElEQVR42uycQU7bQBSGnYoD4F4ARA5QkNmwAiRzBLMtK7Luytk17Miq63hVtuEIsQRdsQmiFyCiF0h6g3RG+kd9Go3tCYTYIf8vPUVxnseTz2/+mbECrfl8HlCrV4vgCZ7gKYIneIrgCZ4ieIKnCJ7gKYIneIIn+I8P/uGh1VMv39eEzb2K06qko6PX8fvE2qtHBF+TtpZsJScVKTtrxGZbRdX3eUHU6/EK/KbN1FfK43u0Gno8RfAETxE8wRM8RfAETxE8wVMET/DUmoK/UtGqiCvrnFOPc6TuPfJPWfGseIrgCZ4ieIKnFtVWA/rwVcVxRc6u9f6Hir8LXGNfxV1Fzvamgd91gPUBuYh8fqpBq6HHUx/aavR2/ldFzrFlFT9V/Kk4R/449kXFTUW+/pXbxSaB19B7FTk9C/wNbtgi4KuucbJK8LQaejzBUwRP8NQHXNXseOwq3/oHDT471/1NA3+xgmWcz7MaWg09niJ4gqcInuApgucG6n11R/D16JuK3+t8c9YV/Jdgxb8KWLb4j4IInuApgid4iuA3CPzBwUGqXq4XaPdMRa4iRXRU3DbkO0fiu5y910Wenp5qfWSgv2Co4rJBxab7EyMav4HS1fpoHRvhVR/vWp+ZXF3piePzjZcv+AnCpRlsxaUMQa3YauYI17DW9jMWOeMCS4pFToA5Y4T3z3hfZCkD5MxxTpnl7cEanz36ZPo1VDEVuQNfC6vrWc3A8YUiHI9gUS6N8bkNK7TsLAToyAIVOyzTXHuE81x90sf7VtEMhBs8oi+XiK6Vv/KKdylB57RFnQf//7K6g2OXyClbMen8toCYOCZ1A11D+IzoAJDLLg3ctqN9e1Slou02+tQWq7msbqtxyXS6by0xM1ElacUy1VRaX1S+fXMDUXkzRFYwmnRbh8ifiGPn1kooKLieUY4+zpoGPhSVmBVMxmaIhwWVWfbePvfWow0JPxF7j6hkQZGJkTWF16eWtTXK42XHph65+StvroTp26+ho5KLLMOMjBTXS8QoyzFSZk2cXAMPqLMlXGPPE36K3EdAm4jJsqhvfUSMGxeLGAibagT43JrI8ne+oYljdREWTPiBw+O7BfNNKAojR/TFaidp4uRqQAwdFSWXaW+R9GBjB2FJ+xOHFQYlnj1ERI4R5mVxdYHPxQZnLsKs79/6HKUrloJmApyi/UlJMVxjPZ8C7KjAviJU9RjtjqzNXL+J4M2ysGNtZiao1PYSLGiGa2QCdI5rdgtGyDlyYrHPOCwYHW20Y6wzFu2c+azj+Ty+JhE8wRM8RfAETxE8wVMET/AUwRM85dA/AQYAMZZD+8fvuYEAAAAASUVORK5CYII=" />
                        </a>
                    </div>
                    <div className="cart-container">
                        <a href="http://m.falabella.com.co/mt/www.falabella.com.co/falabella-co/cart/cart.jsp" className="cart-link">
                            <span className="cart-items-count"></span>
                            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYwIDYxLjEzNDc3NywgMjAxMC8wMi8xMi0xNzozMjowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNSBNYWNpbnRvc2giIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MjFFMEE1NUI3QzYxMTFFNDkwNDc4MDEwQzZGREU3QjAiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MjFFMEE1NUM3QzYxMTFFNDkwNDc4MDEwQzZGREU3QjAiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDoyMUUwQTU1OTdDNjExMUU0OTA0NzgwMTBDNkZERTdCMCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDoyMUUwQTU1QTdDNjExMUU0OTA0NzgwMTBDNkZERTdCMCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Ph2GAOcAAA0cSURBVHja7F0LcFRn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">
                            </img>
                        </a>
                    </div>
                </div>
                <div className="search-container">
                    <div className="search-inner-container">
                        <input type="text" placeholder="Buscar en falabella.com" />
                        <button className="search-button"><span className="search-button-image"></span></button>
                    </div>
                </div>
            </div>
            <div className="extra-info-container">
                <div className="extra-info-inner-container">
                    <a href="http://www.falabella.com.co/falabella-co/category/cat111419/Venta-telef&oacute;nica">Venta telefónica Bogotá<strong> 587 8008, </strong>Nacional <strong>018000 958787</strong></a>
                    <a href="http://www.falabella.com.co/falabella-co/category/cat111257/home#">Tiendas</a>
                    <a href="http://www.falabella.com.co/falabella-co/category/cat111015/Servicio-al-cliente">Servicio al cliente Nacional <strong>018000 113252</strong></a>
                </div>
            </div>
            <div className="top-level-menu-container">
                <ul className="top-level-menu-inner-container">
                    <li className="top-level-menu--category category-electrodomesticos"><a href="http://www.falabella.com.co/falabella-co/category/cat50623/Electrodomesticos" className="none">Electro y Tecnología</a></li>
                    <li className="top-level-menu--category category-dormitorio"><a href="http://www.falabella.com.co/falabella-co/category/cat50480/Colchones">Colchones</a></li>
                    <li className="top-level-menu--category category-decoracion"><a href="http://www.falabella.com.co/falabella-co/category/cat1441241/Decohogar">Decohogar</a></li>
                    <li className="top-level-menu--category category-deportes"><a href="http://www.falabella.com.co/falabella-co/category/cat50609/Deportes">Deportes</a></li>
                    <li className="top-level-menu--category category-infantil"><a href="http://www.falabella.com.co/falabella-co/category/cat50668/Infantil">Infantil</a></li>
                    <li className="top-level-menu--category category-calzado"><a href="http://www.falabella.com.co/falabella-co/category/cat260943/Calzado">Calzado</a></li>
                    <li className="top-level-menu--category category-moda"><a href="http://www.falabella.com.co/falabella-co/category/cat2321031/Moda">Moda Mujer</a></li>
                    <li className="top-level-menu--category category-muebles"><a href="http://www.falabella.com.co/falabella-co/category/cat5521012/Hombre">Hombre</a></li>
                    <li className="top-level-menu--category category-tecnologia"><a href="http://www.falabella.com.co/falabella-co/category/cat900969/Accesorios-y-Belleza">Accesorios</a></li>
                    <li className="top-level-menu--category category-belleza"><a href="http://www.falabella.com.co/falabella-co/category/cat5440960/Belleza">Belleza</a></li>
                </ul>
            </div>
        </div>
        {/*<!-- /. end Header Corp -->*/}
    </header>
    )
  }
}

export default Header;