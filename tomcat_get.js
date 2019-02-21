import http from 'k6/http';

export let options = {
    duration: "10m",
    vus: 10,
    rps: 500
};

export default function () {
    http.get("http://tomcat-sample");
};