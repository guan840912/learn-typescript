//import { User } from './User';
//import { Company } from './Company';

export interface Mappable {
  location: {
    lat: number;
    lng: number;
  };
  markerContent(): string;
}

export class CustomMap {
  // private only can call googleMap in CustomMap class .
  private googleMap: google.maps.Map;

  constructor(devId: string) {
    this.googleMap = new google.maps.Map(document.getElementById(devId), {
      center: {
        lat: 0,
        lng: 0,
      },
      zoom: 1,
    });
  }

  //addUserMarker(user: User): void {
  //  new google.maps.Marker({
  //    map: this.googleMap,
  //    position: {
  //      lat: user.location.lat,
  //      lng: user.location.lng,
  //    },
  //  });
  //}
  //addCompanyMarker(company: Company): void {
  //  new google.maps.Marker({
  //    map: this.googleMap,
  //    position: {
  //      lat: company.location.lat,
  //      lng: company.location.lng,
  //    },
  //  });
  //}

  // two class in one
  // this addMarker , we only need to get the location lat and lng , so User and Company also have location{'lat':'lng'}.
  // we can use one function to create two { User ,Company } Marker .
  addMarker(mappable: Mappable): void {
    const marker = new google.maps.Marker({
      map: this.googleMap,
      position: {
        lat: mappable.location.lat,
        lng: mappable.location.lng,
      },
    });

    marker.addListener('click', () => {
      const infoWindow = new google.maps.InfoWindow({
        content: `Hi there! ${mappable.markerContent()}`,
      });
      infoWindow.open(this.googleMap, marker);
    });
  }
}
