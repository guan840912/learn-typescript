// Run parcel index.html
import { User } from './User';
import { Company } from './Company';
import { CustomMap } from './CustomMap';

const user = new User();
const company = new Company();
const custmap = new CustomMap('map');

custmap.addMarker(user);
custmap.addMarker(company);
