< !DOCTYPE html >
    <html>
        <head>
            <title>Simulador de Créditos</title>
            <style>
                .container {
                    width: 500px;
                margin: 0 auto;
                padding: 20px;
                font-family: Arial, sans-serif;
        {"}"}
                h1 {
                    text - align: center;
        {"}"}
                label {
                    display: block;
                margin-bottom: 10px;
        {"}"}
                input {
                    width: 100%;
                padding: 8px;
                border: 1px solid #ccc;
                border-radius: 4px;
        {"}"}
                button {
                    display: block;
                width: 100%;
                padding: 10px;
                margin-top: 10px;
                background-color: #4CAF50;
                color: #fff;
                border: none;
                border-radius: 4px;
                cursor: pointer;
        {"}"}
                #resultado {
                    font - weight: bold;
                margin-top: 20px;
                text-align: center;
        {"}"}
            </style>
        </head>
        <body>
            <div class="container">
                <h1>Simulador de Créditos</h1>
                <label for="monto">Monto del crédito:</label>
                <input type="number" id="monto" />
                <label for="plazo">Plazo en meses:</label>
                <input type="number" id="plazo" />
                <label for="tasa">Tasa de interés anual:</label>
                <input type="number" id="tasa" step="0.01" />
                <button onclick="calcular()">Calcular</button>
                <div id="resultado"></div>
            </div>

            <script>
                function calcular() {
            var monto = parseFloat(document.getElementById('monto').value);
                var plazo = parseInt(document.getElementById('plazo').value);
                var tasa = parseFloat(document.getElementById('tasa').value);

                if (isNaN(monto) || isNaN(plazo) || isNaN(tasa)) {
                    document.getElementById('resultado').innerHTML = "Por favor ingrese valores numéricos válidos.";
            {"}"} else {
                var interesMensual = (tasa / 12) / 100;
                var cuotaMensual = (monto * interesMensual) / (1 - Math.pow(1 + interesMensual, -plazo));
                var totalAPagar = cuotaMensual * plazo;
                var totalIntereses = totalAPagar - monto;
                document.getElementById('resultado').innerHTML = "La cuota mensual es: $" + cuotaMensual.toFixed(2) + "<br />" + "El total a pagar es: $" + totalAPagar.toFixed(2) + "<br />" + "El total de intereses es: $" + totalIntereses.toFixed(2);
            {"}"}
        {"}"}
            </script>
        </body>
    </html>
