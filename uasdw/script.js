$(document).ready(function() {
    const urlAPI = "https://apimhstiki.ptov.my.id/";
    const NIM = "2401010714"; 

    const urlTestimoni = `${urlAPI}testimoni/${NIM}`;
    $.ajax({
        url: urlTestimoni,
        method: "GET",
        dataType: "json",
        success: function(data) {
            let testimoniHTML = "";
            data.testimoni.forEach(function(item) {
                testimoniHTML += `
                    <div class="testimoni-card">
                        <h5>${item.nama}</h5>
                        <p><strong>Email:</strong> ${item.email}</p>
                        <p><strong>Testimoni:</strong> ${item.testimoni}</p>
                        <p><strong>IP:</strong> ${item.ip}</p>
                    </div>
                `;
            });
            $("#testimoniList").html(testimoniHTML);
        },
        error: function() {
            alert("Gagal memuat data testimoni.");
        }
    });

    // Fetch Produk Kue
    const urlProduk = `${urlAPI}${NIM}/produk/list`;
    $.ajax({
        url: urlProduk,
        method: "GET",
        dataType: "json",
        success: function(data) {
            let produkHTML = "";
            data.produk.forEach(function(produk) {
                produkHTML += `
                    <div class="col-md-3">
                        <div class="produk-item">
                            <img src="${produk.IMG}" alt="${produk.ITEM}">
                            <h5>${produk.ITEM}</h5>
                            <p>Rp. ${produk.HRGJUAL},-</p>
                            <a href="#" class="btn btn-primary">Detail</a>
                            <a href="#" class="btn btn-primary">Order</a>
                        </div>
                    </div>
                `;
            });
            $("#produkList").html(produkHTML);
        },
        error: function() {
            alert("Gagal memuat data produk.");
        }
    });
});
