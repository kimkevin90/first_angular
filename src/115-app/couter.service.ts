export class CounterService {
  activeToInactiveCounter =0;
  InactiveToactiveCounter =0;
  
  incrementActiveToInactive() {
    this.activeToInactiveCounter++;
    console.log(this.activeToInactiveCounter);
  }

  incrmentInActiveToActive() {
    this.InactiveToactiveCounter++;
    console.log(this.InactiveToactiveCounter);
  }
}