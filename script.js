const currency_select_above = document.querySelector(".choose-the-currency-above");
const currency_select_below = document.querySelector(".choose-currency-below");
const convert_button = document.querySelector(".convert");
// <-------------------------------------------------->
if (!currency_select_above) throw new Error("Select acima não encontrado");
if (!currency_select_below) throw new Error("Select abaixo não encontrado");
if (!convert_button) throw new Error("Botão não encontrado");
// <-------------------------------------------------->
// Função para converter o valor da moeda brasileira para outras moedas utilizando o botão de converter.
function convert_value() {
    
    // Variavel referente ao input, onde o usuário digita o valor da moeda.
    const input_value = Number(document.querySelector("#currency-value").value);

    let value_in_brl = 0;
    // <-------------------------------------------------->
    // Valor da moeda brasileira na tag "p".
    const currency_value_to_convert_above = document.querySelector(".value-to-convert-above");
    
    // Valor das outras moedas na tag "p".
    const currency_value_converted_below = document.querySelector(".converted-value-below");

    // Valor das moedas em relação ao real brasileiro. (Data: 04/04/2026)
    const real_brasileiro_value_today = 1.00;
    // <-------------------------------------------------->
    const dolar_value_today = 5.1655;
    // <-------------------------------------------------->
    const euro_value_today = 5.95;
    // <-------------------------------------------------->
    const bitcoin_value_today = 344.90427;
    // <-------------------------------------------------->
    const franco_suico_value_today = 6.44;
    // <-------------------------------------------------->
    const libra_esterlina_value_today = 6.82;
    // <-------------------------------------------------->
    const iene_japones_value_today = 0.032;
    // <-------------------------------------------------->
    const peso_argentino_value_today = 0.0037;
    // <-------------------------------------------------->

    if (currency_select_above.value === "real-brasileiro(BRL)") {
    value_in_brl = input_value;
    }
    if (currency_select_above.value === "dolar-americano(USD)") {
        value_in_brl = input_value * dolar_value_today;
    }
    if (currency_select_above.value === "euro(EUR)") {
        value_in_brl = input_value * euro_value_today;
    }
    if (currency_select_above.value === "bitcoin(BTC)") {
        value_in_brl = input_value * bitcoin_value_today;
    }
    if (currency_select_above.value === "franco-suico(CHF)") {
        value_in_brl = input_value * franco_suico_value_today;
    }
    if (currency_select_above.value === "libra-esterlina(GBP)") {
        value_in_brl = input_value * libra_esterlina_value_today;
    }
    if (currency_select_above.value === "iene(JPY)") {
        value_in_brl = input_value * iene_japones_value_today;
    }
    if (currency_select_above.value === "peso-argentino(ARS)") {
        value_in_brl = input_value * peso_argentino_value_today;
    }
    // <-------------------------------------------------->
    let final_value = 0;
    if (currency_select_below.value === "real-brasileiro(BRL)") {
    final_value = value_in_brl;
    }
    if (currency_select_below.value === "dolar-americano(USD)") {
        final_value = value_in_brl / dolar_value_today;
    }
    if (currency_select_below.value === "euro(EUR)") {
        final_value = value_in_brl / euro_value_today;
    }
    if (currency_select_below.value === "bitcoin(BTC)") {
        final_value = value_in_brl / bitcoin_value_today;
    }
    if (currency_select_below.value === "franco-suico(CHF)") {
        final_value = value_in_brl / franco_suico_value_today;
    }
    if (currency_select_below.value === "libra-esterlina(GBP)") {
        final_value = value_in_brl / libra_esterlina_value_today;
    }
    if (currency_select_below.value === "iene(JPY)") {
        final_value = value_in_brl / iene_japones_value_today;
    }
    if (currency_select_below.value === "peso-argentino(ARS)") {
        final_value = value_in_brl / peso_argentino_value_today;
    }
    // <-------------------------------------------------->
    // Valores formatados dentro da div class = "moeda-converter"
    if (currency_select_above.value === "real-brasileiro(BRL)") {
        currency_value_to_convert_above.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL",
    }).format(input_value).replace(/BRL/,'R$');
    }
    if (currency_select_above.value === "dolar-americano(USD)") {
        currency_value_to_convert_above.innerHTML = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
        }).format(input_value).replace(/USD/,'$');
    }
    if (currency_select_above.value === "euro(EUR)") {
        currency_value_to_convert_above.innerHTML = new Intl.NumberFormat("de-DE", {
        style: "currency",
        currency: "EUR",
        }).format(input_value).replace(/EUR/,'€');
    }
    if (currency_select_above.value === "bitcoin(BTC)") {
        currency_value_to_convert_above.innerHTML = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "BTC",
        }).format(input_value).replace(/BTC/,'Ƀ');
    }
    if (currency_select_above.value === "franco-suico(CHF)") {
        currency_value_to_convert_above.innerHTML = new Intl.NumberFormat("fr-CH", {
        style: "currency",
        currency: "CHF",
        }).format(input_value).replace(/CHF/,'₣');
    }
    if (currency_select_above.value === "libra-esterlina(GBP)") {
        currency_value_to_convert_above.innerHTML = new Intl.NumberFormat("en-GB", {
        style: "currency",
        currency: "GBP",
        }).format(input_value).replace(/GBP/,'£');
    }
    if (currency_select_above.value === "iene(JPY)") {
        currency_value_to_convert_above.innerHTML = new Intl.NumberFormat("ja-JP", {
        style: "currency",
        currency: "JPY",
        }).format(input_value).replace(/JPY/,'¥');
    }
    if (currency_select_above.value === "peso-argentino(ARS)") {
        currency_value_to_convert_above.innerHTML = new Intl.NumberFormat("es-AR", {
        style: "currency",
        currency: "ARS",
        }).format(input_value).replace(/ARS/,'$');
    }
    // <-------------------------------------------------->
    // Valores formatados dentro da div class = "moeda-convertida"
    if (currency_select_below.value === "real-brasileiro(BRL)") {
        currency_value_converted_below.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL",
    }).format(final_value).replace(/BRL/,'R$');
    }
    if (currency_select_below.value === "dolar-americano(USD)") {
        currency_value_converted_below.innerHTML = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
        }).format(final_value).replace(/USD/,'$');
    }
    if (currency_select_below.value === "euro(EUR)") {
        currency_value_converted_below.innerHTML = new Intl.NumberFormat("de-DE", {
        style: "currency",
        currency: "EUR",
        }).format(final_value).replace(/EUR/,'€');
    }
    if (currency_select_below.value === "bitcoin(BTC)") {
        currency_value_converted_below.innerHTML = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "BTC",
        }).format(final_value).replace(/BTC/,'Ƀ');
    }
    if (currency_select_below.value === "franco-suico(CHF)") {
        currency_value_converted_below.innerHTML = new Intl.NumberFormat("fr-CH", {
        style: "currency",
        currency: "CHF",
        }).format(final_value).replace(/CHF/,'₣');
    }
    if (currency_select_below.value === "libra-esterlina(GBP)") {
        currency_value_converted_below.innerHTML = new Intl.NumberFormat("en-GB", {
        style: "currency",
        currency: "GBP",
        }).format(final_value).replace(/GBP/,'£');
    }
    if (currency_select_below.value === "iene(JPY)") {
        currency_value_converted_below.innerHTML = new Intl.NumberFormat("ja-JP", {
        style: "currency",
        currency: "JPY",
        }).format(final_value).replace(/JPY/,'¥');
    }
    if (currency_select_below.value === "peso-argentino(ARS)") {
        currency_value_converted_below.innerHTML = new Intl.NumberFormat("es-AR", {
        style: "currency",
        currency: "ARS",
        }).format(final_value).replace(/ARS/,'$');
    }
}

// <-------------------------------------------------->

// Função para trocar o nome e a imagem da moeda acima e abaixo de acordo com a moeda selecionada no select.
function change_the_currency() {
    // 👇 COLOCA AQUI
    if (currency_select_above.value === currency_select_below.value) {
        currency_select_below.selectedIndex = currency_select_below.selectedIndex === 0 ? 1 : 0;
    }
    // <-------------------------------------------------->
    console.log("Troquei a moeda acima para: " + currency_select_above.value);
    console.log("Troquei a moeda abaixo para: " + currency_select_below.value);
    // <-------------------------------------------------->
    const currency_name_change_above = document.getElementById("currency-name-change-above");
    const currency_image_change_above = document.getElementById("currency-image-change-above");
    const currency_name_change_below = document.getElementById("currency-name-change-below");
    const currency_image_change_below = document.getElementById("currency-image-change-below");
    // <-------------------------------------------------->
    if (currency_select_above.value === "real-brasileiro(BRL)") {
        currency_name_change_above.innerHTML = "Real Brasileiro";
        currency_image_change_above.src = "./assets/real-brasileiro(BRL).png";
        }
    if (currency_select_above.value === "dolar-americano(USD)") {
        currency_name_change_above.innerHTML = "Dolar Americano";
        currency_image_change_above.src = "./assets/dolar-americano(USD).png";
        }
    if (currency_select_above.value === "euro(EUR)") {
        currency_name_change_above.innerHTML = "Euro";
        currency_image_change_above.src = "./assets/euro(EUR).png";
        }
    if (currency_select_above.value === "bitcoin(BTC)") {
        currency_name_change_above.innerHTML = "Bitcoin";
        currency_image_change_above.src = "./assets/bitcoin(BTC).png";
        }
    if (currency_select_above.value === "franco-suico(CHF)") {
        currency_name_change_above.innerHTML = "Franco Suiço";
        currency_image_change_above.src = "./assets/franco-suico(CHF).png";
        }
    if (currency_select_above.value === "libra-esterlina(GBP)") {
        currency_name_change_above.innerHTML = "Libra Esterlina";
        currency_image_change_above.src = "./assets/libra-esterlina(GBP).png";
        }
    if (currency_select_above.value === "iene(JPY)") {
        currency_name_change_above.innerHTML = "Iene Japonês";
        currency_image_change_above.src = "./assets/iene-japones(JPY).png";
        }
    if (currency_select_above.value === "peso-argentino(ARS)") {
        currency_name_change_above.innerHTML = "Peso Argentino";
        currency_image_change_above.src = "./assets/peso-argentino(ARS).png";
        }
    // <-------------------------------------------------->
    if (currency_select_below.value === "real-brasileiro(BRL)") {
        currency_name_change_below.innerHTML = "Real Brasileiro";
        currency_image_change_below.src = "./assets/real-brasileiro(BRL).png";
        }
    if (currency_select_below.value === "dolar-americano(USD)") {
        currency_name_change_below.innerHTML = "Dolar Americano";
        currency_image_change_below.src = "./assets/dolar-americano(USD).png";
        }
    if (currency_select_below.value === "euro(EUR)") {
        currency_name_change_below.innerHTML = "Euro";
        currency_image_change_below.src = "./assets/euro(EUR).png";
        }
    if (currency_select_below.value === "bitcoin(BTC)") {
        currency_name_change_below.innerHTML = "Bitcoin";
        currency_image_change_below.src = "./assets/bitcoin(BTC).png";
        }
    if (currency_select_below.value === "franco-suico(CHF)") {
        currency_name_change_below.innerHTML = "Franco Suiço";
        currency_image_change_below.src = "./assets/franco-suico(CHF).png";
        }
    if (currency_select_below.value === "libra-esterlina(GBP)") {
        currency_name_change_below.innerHTML = "Libra Esterlina";
        currency_image_change_below.src = "./assets/libra-esterlina(GBP).png";
        }
    if (currency_select_below.value === "iene(JPY)") {
        currency_name_change_below.innerHTML = "Iene Japonês";
        currency_image_change_below.src = "./assets/iene-japones(JPY).png";
        }
    if (currency_select_below.value === "peso-argentino(ARS)") {
        currency_name_change_below.innerHTML = "Peso Argentino";
        currency_image_change_below.src = "./assets/peso-argentino(ARS).png";
        }
    convert_value();
}
// <-------------------------------------------------->
// Adicionando os eventos de click e change para as funções.
currency_select_above.addEventListener("change", change_the_currency);
currency_select_below.addEventListener("change", change_the_currency);
convert_button.addEventListener("click", convert_value);
// <-------------------------------------------------->
currency_select_below.selectedIndex = 1;