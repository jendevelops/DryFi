function timeToDry(tempC, humidity, windspeed){
  tempK = tempC+273.15;
  x = 21.07 - (5336 / tempK);
  delta = Math.exp(x)*5336/(tempK*tempK);
  lambda = 2.501 - (0.002361 * (tempK - 273));
  gamma = 0.0016286 * 101.3 / lambda;
  d = (1 - humidity) * Math.exp(x);
  rn = 340 * 30 * 60 / 1000000
  e = ((delta*rn)+(gamma*6.43*d*(1+(0.536*windspeed))))/(lambda*(delta+gamma));
  rho = 1000;
  mass = 0.075;
  surfaceArea = 0.75;
  t = m/(rho*e*surfaceArea*60);
  return t;
}


