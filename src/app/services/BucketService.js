export class BucketService {
  constructor() {
    this.buckets = {
      green: 0,
      blue: 0,
      red: 0
    };
  }
  setBucket(key, value) {
    this.buckets[key] = value;
  }
}
