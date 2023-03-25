export default class TimeHelper {
    calcTime(city, offset) {
        // create Date object for current location
        var d = new Date();

        // convert to msec
        // subtract local time zone offset
        // get UTC time in msec
        var utc = d.getTime() + (d.getTimezoneOffset() * 60000);

        // create new Date object for different city
        // using supplied offset
        var nd = new Date(utc + (3600000 * offset));

        // return time as a string
        // return "The local time for city"+ city +" is "+ nd.toLocaleString();
        return nd;
    }

    /**
     *
     * @param place string
     * @param date Date
     */
    getOffsetForPlaceInTime(place, date = new Date()) {
        let offset = "";
        if (place === 'ohio') {
            // CEST aka UTC-4 OR UTC-5
            offset = "-5";

            // only if before March or after November -> look into days
            if (date.getUTCMonth() === 2) {
                if (date.getUTCDate() >= 12) {
                    // now maximum:
                    if (date.getUTCMonth() <= 10) {
                        // good - before november
                        offset = "-4";
                    } else {
                        // in november
                        if (date.getDate() <= 5) {
                            // all good - within time
                            offset = "-4";
                        }
                    }
                    // different offset
                }
                // different offset
            } else if (date.getUTCMonth() === 10) {
                if (date.getUTCDate() <= 5) {
                    // all good - within time
                    offset = "-4";
                }
                // different offset
            } else {
                // different offset
            }
        } else if (place === 'berlin') {
            // CEST aka UTC+1 OR UTC+2
            offset = "+1";

            if (date.getUTCMonth() === 2) {
                if (date.getUTCDate() >= 26) {
                    // now maximum:
                    if (date.getUTCMonth() <= 9) {
                        // good - before october
                        offset = "+2";
                    } else {
                        // in october
                        if (date.getDate() <= 29) {
                            // all good - within time
                            offset = "+2";
                        }
                    }
                    // different offset
                }
                // different offset
            } else if (date.getUTCMonth() === 9) {
                if (date.getUTCDate() <= 29) {
                    // all good - within time
                    offset = "+2";
                }
                // different offset
            } else {
                // different offset
            }

        } else if (place === 'london') {
            offset = "+0";

            if (date.getUTCMonth() === 2) {
                if (date.getUTCDate() >= 26) {
                    // now maximum:
                    if (date.getUTCMonth() <= 9) {
                        // good - before october
                        offset = "+1";
                    } else {
                        // in october
                        if (date.getDate() <= 29) {
                            // all good - within time
                            offset = "+1";
                        }
                    }
                    // different offset
                }
                // different offset
            } else if (date.getUTCMonth() === 9) {
                if (date.getUTCDate() <= 29) {
                    // all good - within time
                    offset = "+1";
                }
                // different offset
            } else {
                // different offset
            }

        }
        return offset;
    }

}