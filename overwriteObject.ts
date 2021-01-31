

interface Ia {
 a:  { [key: string]: string };
} 

interface Idata {
 metadata: Ia;
 b: string;
 ssl: boolean;
}
const data: Idata = {
  metadata: {
    a: {
    'k8s.com': 'test1',
    'k8s.com.2': 'test2',
  }
},
  b: 'second',
  ssl: true,
};
console.log(data);

class test {
  public classMetadata: Idata;
  constructor(props: Idata){
    console.log(props)
    this.classMetadata = props;
    console.log('before check :');
    console.log(this.getMetadata());
    if (props.ssl){
        this.classMetadata.metadata.a = {
          'alb.ingress.kubernetes.io/actions.ssl-redirect': '{"Type": "redirect", "RedirectConfig": { "Protocol": "HTTPS", "Port": "443", "StatusCode": "HTTP_301"}}',
          ...props.metadata.a
        }
    }
    console.log('after check :');
    console.log( this.getMetadata());
  }
  getMetadata() {
    return this.classMetadata
  }
} 

console.log('new Class');
new test(data);