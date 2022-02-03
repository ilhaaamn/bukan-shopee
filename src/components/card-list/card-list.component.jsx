import Card from "./card.component";

const CardList = (props) => {
  console.log(props);
  return (
    <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-6 md:grid-cols-3">
      {props.items.map((item, index) => {
        return (
          <Card
            key={index}
            z={index}
            id={item.item_basic.id}
            name={formatMaxTitle(item.item_basic.name)}
            price={formatRupiah(
              item.item_basic.price
                .toString()
                .substring(0, item.item_basic.price.toString().length - 5),
              "Rp"
            )}
            totalSold={formatRibu(item.item_basic.historical_sold)}
            image={"https://cf.shopee.co.id/file/" + item.item_basic.image}
            description={item.item_basic.description}
            isOfficial={item.item_basic.is_official_shop}
            isVerified={item.item_basic.shopee_verified}
          />
        );
      })}
    </div>
  );
};

const formatMaxTitle = (title) => {
  if (title.length > 40) {
    return title.substring(0, 40) + "...";
  } else {
    return title;
  }
};

const formatRupiah = (angka, prefix) => {
  var number_string = angka.replace(/[^,\d]/g, "").toString(),
    split = number_string.split(","),
    sisa = split[0].length % 3,
    rupiah = split[0].substr(0, sisa),
    ribuan = split[0].substr(sisa).match(/\d{3}/gi);

  if (ribuan) {
    var separator = sisa ? "." : "";
    rupiah += separator + ribuan.join(".");
  }

  rupiah = split[1] !== undefined ? rupiah + "," + split[1] : rupiah;
  return prefix === undefined ? rupiah : rupiah ? "Rp" + rupiah : "";
};

const formatRibu = (angka) => {
  var totalSold = Math.round((angka / 1000) * 10) / 10;
  if (totalSold < 1) {
    return angka;
  } else if (totalSold > 10) {
    totalSold = 10;
    return totalSold.toString().replace(".", ",") + "RB+";
  }
  return totalSold.toString().replace(".", ",") + "RB";
};

export default CardList;
