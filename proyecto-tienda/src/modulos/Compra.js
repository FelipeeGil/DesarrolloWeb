export const Compra = () => {
    return (
      <div class="row justify-content-evenly">
        <div class="col-md-5 col-lg-4 order-md-last">
          <div class="col-md-5 col-lg-4 order-md-last">
                <h4 class=" align-items-center mb-3 d-flex justify-content-between">
                  <span class="text-primary">Tu Carrito</span>
                </h4>
                <ul class="list-group mb-3">
                    <li class="list-group-item d-flex justify-content-between row">
                      <div class="col-6">
                          <h6 class="my-0">Leche</h6>
                      </div>
                      <div class="col d-flex justify-content-evenly">
                        -
                        <span class="">0</span>
                        +
                      </div>
                      <div class="col col-lg-1">
                          <span class="text-muted d-flex justify-content-end">0$</span>
                      </div>
                    </li>
                    <li class="list-group-item d-flex justify-content-between row">
                      <div class="col-6">
                          <h6 class="my-0">Carne</h6>
                      </div>
                      <div class="col d-flex justify-content-evenly">
                        -
                        <span class="">0</span>
                        +
                      </div>
                      <div class="col col-lg-1">
                          <span class="text-muted d-flex justify-content-end">0$</span>
                      </div>
                    </li>
                    <li class="list-group-item d-flex justify-content-between row">
                      <div class="col-6">
                          <h6 class="my-0">Pan</h6>
                      </div>
                      <div class="col d-flex justify-content-evenly">
                        -
                        <span class="">0</span>
                        +
                      </div>
                      <div class="col col-lg-1">
                          <span class="text-muted d-flex justify-content-end">0$</span>
                      </div>
                    </li>
                  <li class="list-group-item d-flex justify-content-between row">
                      <div class="col">
                          <strong>Total (Cop)</strong>
                      </div>
                      <div class="col col-lg-3">
                          <span class="d-flex justify-content-end">0$</span>
                      </div>
                  </li>
                </ul>
            </div>
        </div>
        <div class="col-md-7 col-lg-8">
          <h4 class="mb-3">Dirección de Envío</h4>
          <form class="needs-validation" novalidate >
              <div class="row g-3">
                  <div class="col-sm-6">
                      <label for="firstName" class="form-label">Nombre</label>
                      <input type="text" class="form-control" id="firstName" placeholder="nombre" required/>
                      <div class="invalid-feedback">
                          Valida el primer nombre primero.
                      </div>
                  </div>
                  <div class="col-sm-6">
                      <label for="lastName" class="form-label">Apellido</label>
                      <input type="text" class="form-control" id="lastName" placeholder="apellido"  required/>
                      <div class="invalid-feedback">
                          Valida el apellido primero.
                      </div>
                  </div>
                  <div class="col-12">
                      <label for="email" class="form-label">Correo</label>
                      <input type="email" class="form-control" id="email" placeholder="correo@ejemplo.com" required/>
                      <div class="invalid-feedback">
                          Ingresa un correo valido.
                      </div>
                  </div>
                  <div class="col-12">
                      <label for="address" class="form-label">Dirección</label>
                      <input type="text" class="form-control" id="address" placeholder="1234 Main St" required/>
                      <div class="invalid-feedback">
                          Por favor ingresa una dirección.
                      </div>
                  </div>
                  <div class="col-md-5">
                      <label for="country" class="form-label">Ciudad</label>
                      <select class="form-select" id="country" required>
                          <option value="" disabled selected>Selecciona</option>
                          <option>Medellín</option>
                      </select>
                      <div class="invalid-feedback">
                          Por favor ingresa una ciudad valida.
                      </div>
                  </div>
              </div>
              <hr class="my-4"/>
              <h4 class="mb-3">Método de Pago</h4>
              <div class="my-3">
                  <div class="form-check">
                      <input id="credit" name="paymentMethod" type="radio" class="form-check-input" checked required/>
                      <label class="form-check-label" for="credit">Tarjeta de Crédito</label>
                  </div>
                  <div class="form-check">
                      <input id="debit" name="paymentMethod" type="radio" class="form-check-input" required/>
                      <label class="form-check-label" for="debit">Tarjeta de Debito</label>
                  </div>
                  <div class="form-check">
                      <input id="paypal" name="paymentMethod" type="radio" class="form-check-input" required/>
                      <label class="form-check-label" for="paypal">PayPal</label>
                  </div>
              </div>
              <div class="row gy-3">
                  <div class="col-md-6">
                      <label for="cc-name" class="form-label">Nombre de la tarjeta</label>
                      <input type="text" class="form-control" id="cc-name" placeholder="nombre" required/>
                      <small class="text-muted">Nombre del propietario</small>
                      <div class="invalid-feedback">
                          EL nombre de la tarjeta es requerido.
                      </div>
                  </div>
                  <div class="col-md-6">
                      <label for="cc-number" class="form-label">Número de la tarjeta</label>
                      <input type="number" class="form-control" id="cc-number" placeholder="0000-0000-0000-0000" required/>
                      <div class="invalid-feedback">
                          El número de la tarjeta es requerido.
                      </div>
                  </div>
                  <div class="col-md-3">
                      <label for="cc-expiration" class="form-label">Expiración</label>
                      <input type="text" class="form-control" id="cc-expiration" placeholder="01/01" required/>
                      <div class="invalid-feedback">
                          El código de expiración es requerido.
                      </div>
                  </div>
                  <div class="col-md-3">
                      <label for="cc-cvv" class="form-label">CVV</label>
                      <input type="number" class="form-control" id="cc-cvv" placeholder="000" required/>
                      <div class="invalid-feedback">
                          Código de seguridad
                      </div>
                  </div>
              </div> 
              <hr class="my-4"/>
              <button class="w-100 btn btn-primary btn-lg" type="submit" href="/">Continue para pagar</button>
          </form>
        </div>
      </div>
    );
  };
  