kataPenting = ['kuis', 'ujian', 'tucil', 'tubes', 'praktikum']

function buildLast(text, pattern){
    let x = {}
    pattern = pattern.toLowerCase();
    text = text.toLowerCase();
    text = new Set(text);
    
    for(word of text){
        x[word] = -1;
    }
    for(let i = 0; i<pattern.length; i++){
        x[pattern[i]] = i;
    }   
    return x
}

function bmMatch(text, pattern){
    const last = buildLast(text, pattern);
    const m = pattern.length;
    const n = text.length;
    let i = m-1;

    if(i>n-1) return -1;

    let j = m-1;
    do {
        if(text[i] == pattern[j]){
            if(j == 0) return i;
            else{
                j--;
                i--;
            }
        }else{
            lo = last[text[i]];
            i = i+m - Math.min(j, 1+lo);
            j = m-1;
        }
    } while (i <= n-1);

    return -1;
}

function mappingTanggal(tanggal){
    if(!tanggal.match(/\d{1,2}\/\d{1,2}\/\d{4}/)){
        tanggal = tanggal.split(" ");
        let bulan = tanggal[1];

        if(bulan.match(/[j|J]an(uar[i|y])?/)) bulan = '01';
        else if(bulan.match(/[F|f]eb(ruar[i|y])?/)) bulan = '02';
        else if(bulan.match(/[M|m]ar(et|ch)?/)) bulan = '03';
        else if(bulan.match(/[a|A]pr(il)?/)) bulan = '04';
        else if(bulan.match(/[M|m](ei|ay)/)) bulan = '05';
        else if(bulan.match(/[J|j]un(i|y)?/)) bulan = '06';
        else if(bulan.match(/[J|j]ul(i|y)?/)) bulan = '07';
        else if(bulan.match(/[A|a](ug|(u)?gust)(us)?/)) bulan = '08';
        else if(bulan.match(/[S|s]ept(ember)?/)) bulan = '09';
        else if(bulan.match(/[O|o]kt(ober)?/)) bulan = '10';
        else if(bulan.match(/[N|n]ov(ember)?/)) bulan = '11';
        else if(bulan.match(/[D|d]e(s|c)(ember)?/)) bulan = '12';
        else bulan = '';

        const hari = tanggal[0];
        const tahun = tanggal[2];

        tanggal = [hari, bulan, tahun].join("/");
    }
    return tanggal;
}

function getTanggal(message){
    const patternTanggal = /(\d{1,2}\/\d{1,2}\/\d{4})|((\d{1,2})\s([jJ]an(uar[iy])?|[Ff]eb(ruar[iy])?|[Mm]ar(et|ch)?|[aA]pr(il)?|[Mm](ei|ay)|[Jj]un[iy]?|[Jj]ul[iy]?|[Aa](ug|(u)?gust)(us)?|([Ss]ept|[Nn]ov|[Dd]e(s|c))(ember)?|[Oo]kt(ober)?)\s(\d{4}))/;
    let tanggal = message.match(patternTanggal);
    if(tanggal){
        tanggal = mappingTanggal(tanggal[0]);
    }
    return tanggal;
}
function getDay(tanggal){
    tanggal = tanggal.split("/");
    return tanggal[0];
}

function getMonth(tanggal){
    tanggal = tanggal.split("/");
    return tanggal[1];
}

function getYear(tanggal){
    tanggal = tanggal.split("/");
    return tanggal[2];
}
function getKodeMatkul(message){
    let kodeMatkul = message.match(/[A-Z|a-z]{2}\d{4}/);
    if(kodeMatkul){
        kodeMatkul = kodeMatkul[0];
        kodeMatkul = kodeMatkul.slice(0,2).toUpperCase() + kodeMatkul.slice(2);
    }
    return kodeMatkul;
}

function getTopik(message){
    let topik = message.match(/(?<=[A-Z|a-z]{2}\d{4}\s)(.*)(?= pada)/);
    if(topik){
        topik = topik[0];
        topik = topik.split(" ");
        for(let i=0;i<topik.length;i++){
            topik[i] = topik[i].slice(0, 1).toUpperCase() + topik[i].slice(1).toLowerCase();
        }
        topik = topik.join(" ")
    }
    return topik;
}

function getTipeTugas(message){
    message = message.toLowerCase();
    let tipeTugas = null;
    for(word of kataPenting){
        if(message.match(word)) {
            tipeTugas = word.slice(0, 1).toUpperCase() + word.slice(1);
        }
    }
    return tipeTugas;
}

function getTask(message){
    const kodeMatkul = getKodeMatkul(message);
    const tanggal = getTanggal(message);
    const tipeTugas = getTipeTugas(message);
    const topik = getTopik(message);
    const task = {
        tanggal: tanggal,
        kodeMatkul: kodeMatkul,
        tipeTugas: tipeTugas,
        topik: topik
    }
    return task;
}


function isTanyaDeadline(message){
    message = message.toLowerCase();
    if(bmMatch(message, "deadline")!=-1) return true;
    else if(message.match(/\?/)) return true;
    return false;
}

function isTanyaHari(message){
    message = message.toLowerCase();
    if(bmMatch(message, "hari")!=-1) return true;
    return false;
}

function isTanyaHariIni(message){
    message = message.toLowerCase();
    if(bmMatch(message, "hari ini")!=-1) return true;
    return false;
}

function isTanyaHariMinggu(message){
    message = message.toLowerCase();
    if(bmMatch(message, "minggu")!=-1) return true;
    return false;
}

function getBanyakDurasi(message){
    let durasi = message.match(/\d+/);
    if(durasi) {
        durasi = durasi[0];
    }
    return durasi;
}

function getRentangTanggal(message){
    const patternTanggal = /(\d{1,2}\/\d{1,2}\/\d{4})|((\d{1,2})\s([jJ]an(uar[iy])?|[Ff]eb(ruar[iy])?|[Mm]ar(et|ch)?|[aA]pr(il)?|[Mm](ei|ay)|[Jj]un[iy]?|[Jj]ul[iy]?|[Aa](ug|(u)?gust)(us)?|([Ss]ept|[Nn]ov|[Dd]e(s|c))(ember)?|[Oo]kt(ober)?)\s(\d{4}))/g;
    let tanggal = message.match(patternTanggal);
    // if(tanggal.length == 2){
    const dari = mappingTanggal(tanggal[0]);
    const sampai = mappingTanggal(tanggal[1]);

    tanggal = [dari, sampai];
    // }
    return tanggal;
}

// rentangTanggal = getRentangTanggal(message);
function isInRentangTanggal(tanggal, rentangTanggal){
    let from = rentangTanggal[0];
    let to = rentangTanggal[1];
    let check = getTanggal(tanggal);

    from =  new Date(getYear(from), parseInt(getMonth(from))-1, parseInt(getDay(from)));
    to =  new Date(getYear(to), parseInt(getMonth(to))-1, parseInt(getDay(to)));
    check =  new Date(getYear(check), parseInt(getMonth(check))-1, getDay(check));
    return (check>=from && check<=to);
}

function isInNweekLater(tanggal, nWeekLater){
    let check = tanggal;
    let from =  new Date();
    let to = new Date(from.getTime() + nWeekLater * 7 * 24 * 60 * 60 * 1000);


    from = from.getDate()+"/"+parseInt(from.getMonth()+1)+"/"+from.getFullYear();
    to = to.getDate()+"/"+parseInt(to.getMonth()+1)+"/"+to.getFullYear();
    rentangTanggal = [from, to];

    return isInRentangTanggal(check, rentangTanggal);
}