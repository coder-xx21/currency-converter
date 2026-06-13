// ===== Comprehensive Currency Data with Flags and Symbols =====
// 150+ world currencies with proper flags and symbols
const currencyData = {
    // Americas
    AED: { name: "United Arab Emirates Dirham", flag: "🇦🇪", symbol: "د.إ" },
    AFN: { name: "Afghan Afghani", flag: "🇦🇫", symbol: "؋" },
    ALL: { name: "Albanian Lek", flag: "🇦🇱", symbol: "Lek" },
    AMD: { name: "Armenian Dram", flag: "🇦🇲", symbol: "֏" },
    ANG: { name: "Netherlands Antillean Guilder", flag: "🇳🇱", symbol: "ƒ" },
    AOA: { name: "Angolan Kwanza", flag: "🇦🇴", symbol: "Kz" },
    ARS: { name: "Argentine Peso", flag: "🇦🇷", symbol: "$" },
    AUD: { name: "Australian Dollar", flag: "🇦🇺", symbol: "A$" },
    AWG: { name: "Aruban Florin", flag: "🇦🇼", symbol: "ƒ" },
    AZN: { name: "Azerbaijani Manat", flag: "🇦🇿", symbol: "₼" },
    BAM: { name: "Bosnia and Herzegovina Convertible Mark", flag: "🇧🇦", symbol: "KM" },
    BBD: { name: "Barbadian Dollar", flag: "🇧🇧", symbol: "Bds$" },
    BDT: { name: "Bangladeshi Taka", flag: "🇧🇩", symbol: "৳" },
    BGN: { name: "Bulgarian Lev", flag: "🇧🇬", symbol: "лв" },
    BHD: { name: "Bahraini Dinar", flag: "🇧🇭", symbol: "د.ب" },
    BIF: { name: "Burundian Franc", flag: "🇧🇮", symbol: "Fr" },
    BMD: { name: "Bermudian Dollar", flag: "🇧🇲", symbol: "$" },
    BND: { name: "Bruneian Dollar", flag: "🇧🇳", symbol: "B$" },
    BOB: { name: "Bolivian Boliviano", flag: "🇧🇴", symbol: "Bs." },
    BRL: { name: "Brazilian Real", flag: "🇧🇷", symbol: "R$" },
    BSD: { name: "Bahamian Dollar", flag: "🇧🇸", symbol: "B$" },
    BTN: { name: "Bhutanese Ngultrum", flag: "🇧🇹", symbol: "Nu." },
    BWP: { name: "Botswanan Pula", flag: "🇧🇼", symbol: "P" },
    BYN: { name: "Belarusian Ruble", flag: "🇧🇾", symbol: "Br" },
    BZD: { name: "Belize Dollar", flag: "🇧🇿", symbol: "BZ$" },
    CAD: { name: "Canadian Dollar", flag: "🇨🇦", symbol: "C$" },
    CDF: { name: "Congolese Franc", flag: "🇨🇩", symbol: "Fr" },
    CHF: { name: "Swiss Franc", flag: "🇨🇭", symbol: "Fr" },
    CLF: { name: "Chilean Unit of Account", flag: "🇨🇱", symbol: "UF" },
    CLP: { name: "Chilean Peso", flag: "🇨🇱", symbol: "$" },
    CNY: { name: "Chinese Yuan", flag: "🇨🇳", symbol: "¥" },
    COP: { name: "Colombian Peso", flag: "🇨🇴", symbol: "$" },
    CRC: { name: "Costa Rican Colón", flag: "🇨🇷", symbol: "₡" },
    CUC: { name: "Cuban Convertible Peso", flag: "🇨🇺", symbol: "₱" },
    CUP: { name: "Cuban Peso", flag: "🇨🇺", symbol: "₱" },
    CVE: { name: "Cape Verdean Escudo", flag: "🇨🇻", symbol: "Esc" },
    CZK: { name: "Czech Koruna", flag: "🇨🇿", symbol: "Kč" },
    DJF: { name: "Djiboutian Franc", flag: "🇩🇯", symbol: "Fr" },
    DKK: { name: "Danish Krone", flag: "🇩🇰", symbol: "kr" },
    DOP: { name: "Dominican Peso", flag: "🇩🇴", symbol: "RD$" },
    DZD: { name: "Algerian Dinar", flag: "🇩🇿", symbol: "د.ج" },
    EGP: { name: "Egyptian Pound", flag: "🇪🇬", symbol: "£" },
    ERN: { name: "Eritrean Nakfa", flag: "🇪🇷", symbol: "Nfk" },
    ETB: { name: "Ethiopian Birr", flag: "🇪🇹", symbol: "Br" },
    EUR: { name: "Euro", flag: "🇪🇺", symbol: "€" },
    FJD: { name: "Fijian Dollar", flag: "🇫🇯", symbol: "FJ$" },
    FKP: { name: "Falkland Islands Pound", flag: "🇫🇰", symbol: "£" },
    GBP: { name: "British Pound", flag: "🇬🇧", symbol: "£" },
    GEL: { name: "Georgian Lari", flag: "🇬🇪", symbol: "₾" },
    GHS: { name: "Ghanaian Cedi", flag: "🇬🇭", symbol: "₵" },
    GIP: { name: "Gibraltar Pound", flag: "🇬🇮", symbol: "£" },
    GMD: { name: "Gambian Dalasi", flag: "🇬🇲", symbol: "D" },
    GNF: { name: "Guinean Franc", flag: "🇬🇳", symbol: "Fr" },
    GTQ: { name: "Guatemalan Quetzal", flag: "🇬🇹", symbol: "Q" },
    GYD: { name: "Guyanese Dollar", flag: "🇬🇾", symbol: "G$" },
    HKD: { name: "Hong Kong Dollar", flag: "🇭🇰", symbol: "HK$" },
    HNL: { name: "Honduran Lempira", flag: "🇭🇳", symbol: "L" },
    HRK: { name: "Croatian Kuna", flag: "🇭🇷", symbol: "kn" },
    HTG: { name: "Haitian Gourde", flag: "🇭🇹", symbol: "G" },
    HUF: { name: "Hungarian Forint", flag: "🇭🇺", symbol: "Ft" },
    IDR: { name: "Indonesian Rupiah", flag: "🇮🇩", symbol: "Rp" },
    ILS: { name: "Israeli New Sheqel", flag: "🇮🇱", symbol: "₪" },
    INR: { name: "Indian Rupee", flag: "🇮🇳", symbol: "₹" },
    IQD: { name: "Iraqi Dinar", flag: "🇮🇶", symbol: "د.ع" },
    IRR: { name: "Iranian Rial", flag: "🇮🇷", symbol: "﷼" },
    ISK: { name: "Icelandic Króna", flag: "🇮🇸", symbol: "kr" },
    JMD: { name: "Jamaican Dollar", flag: "🇯🇲", symbol: "J$" },
    JOD: { name: "Jordanian Dinar", flag: "🇯🇴", symbol: "د.ا" },
    JPY: { name: "Japanese Yen", flag: "🇯🇵", symbol: "¥" },
    KES: { name: "Kenyan Shilling", flag: "🇰🇪", symbol: "Sh" },
    KGS: { name: "Kyrgyzstani Som", flag: "🇰🇬", symbol: "с" },
    KHR: { name: "Cambodian Riel", flag: "🇰🇭", symbol: "៛" },
    KMF: { name: "Comorian Franc", flag: "🇰🇲", symbol: "Fr" },
    KPW: { name: "North Korean Won", flag: "🇰🇵", symbol: "₩" },
    KRW: { name: "South Korean Won", flag: "🇰🇷", symbol: "₩" },
    KWD: { name: "Kuwaiti Dinar", flag: "🇰🇼", symbol: "د.ك" },
    KYD: { name: "Cayman Islands Dollar", flag: "🇰🇾", symbol: "$" },
    KZT: { name: "Kazakhstani Tenge", flag: "🇰🇿", symbol: "₸" },
    LAK: { name: "Laotian Kip", flag: "🇱🇦", symbol: "₭" },
    LBP: { name: "Lebanese Pound", flag: "🇱🇧", symbol: "£" },
    LKR: { name: "Sri Lankan Rupee", flag: "🇱🇰", symbol: "Rs" },
    LRD: { name: "Liberian Dollar", flag: "🇱🇷", symbol: "L$" },
    LSL: { name: "Lesotho Loti", flag: "🇱🇸", symbol: "L" },
    LYD: { name: "Libyan Dinar", flag: "🇱🇾", symbol: "ل.د" },
    MAD: { name: "Moroccan Dirham", flag: "🇲🇦", symbol: "د.م." },
    MDL: { name: "Moldovan Leu", flag: "🇲🇩", symbol: "L" },
    MGA: { name: "Malagasy Ariary", flag: "🇲🇬", symbol: "Ar" },
    MKD: { name: "Macedonian Denar", flag: "🇲🇰", symbol: "ден" },
    MMK: { name: "Myanma Kyat", flag: "🇲🇲", symbol: "K" },
    MNT: { name: "Mongolian Tugrik", flag: "🇲🇳", symbol: "₮" },
    MOP: { name: "Macanese Pataca", flag: "🇲🇴", symbol: "P" },
    MRU: { name: "Mauritanian Ouguiya", flag: "🇲🇷", symbol: "UM" },
    MUR: { name: "Mauritian Rupee", flag: "🇲🇺", symbol: "₨" },
    MVR: { name: "Maldivian Rufiyaa", flag: "🇲🇻", symbol: "Rf" },
    MWK: { name: "Malawian Kwacha", flag: "🇲🇼", symbol: "MK" },
    MXN: { name: "Mexican Peso", flag: "🇲🇽", symbol: "$" },
    MYR: { name: "Malaysian Ringgit", flag: "🇲🇾", symbol: "RM" },
    MZN: { name: "Mozambican Metical", flag: "🇲🇿", symbol: "MT" },
    NAD: { name: "Namibian Dollar", flag: "🇳🇦", symbol: "$" },
    NGN: { name: "Nigerian Naira", flag: "🇳🇬", symbol: "₦" },
    NIO: { name: "Nicaraguan Córdoba", flag: "🇳🇮", symbol: "C$" },
    NOK: { name: "Norwegian Krone", flag: "🇳🇴", symbol: "kr" },
    NPR: { name: "Nepalese Rupee", flag: "🇳🇵", symbol: "₨" },
    NZD: { name: "New Zealand Dollar", flag: "🇳🇿", symbol: "NZ$" },
    OMR: { name: "Omani Rial", flag: "🇴🇲", symbol: "ر.ع." },
    PAB: { name: "Panamanian Balboa", flag: "🇵🇦", symbol: "B/." },
    PEN: { name: "Peruvian Nuevo Sol", flag: "🇵🇪", symbol: "S/" },
    PGK: { name: "Papua New Guinean Kina", flag: "🇵🇬", symbol: "K" },
    PHP: { name: "Philippine Peso", flag: "🇵🇭", symbol: "₱" },
    PKR: { name: "Pakistani Rupee", flag: "🇵🇰", symbol: "₨" },
    PLN: { name: "Polish Zloty", flag: "🇵🇱", symbol: "zł" },
    PYG: { name: "Paraguayan Guaraní", flag: "🇵🇾", symbol: "₲" },
    QAR: { name: "Qatari Rial", flag: "🇶🇦", symbol: "ر.ق" },
    RON: { name: "Romanian Leu", flag: "🇷🇴", symbol: "lei" },
    RSD: { name: "Serbian Dinar", flag: "🇷🇸", symbol: "дин." },
    RUB: { name: "Russian Ruble", flag: "🇷🇺", symbol: "₽" },
    RWF: { name: "Rwandan Franc", flag: "🇷🇼", symbol: "Fr" },
    SAR: { name: "Saudi Riyal", flag: "🇸🇦", symbol: "ر.س" },
    SBD: { name: "Solomon Islands Dollar", flag: "🇸🇧", symbol: "SI$" },
    SCR: { name: "Seychellois Rupee", flag: "🇸🇨", symbol: "₨" },
    SDG: { name: "Sudanese Pound", flag: "🇸🇩", symbol: "ج.س." },
    SEK: { name: "Swedish Krona", flag: "🇸🇪", symbol: "kr" },
    SGD: { name: "Singapore Dollar", flag: "🇸🇬", symbol: "S$" },
    SHP: { name: "Saint Helena Pound", flag: "🇸🇭", symbol: "£" },
    SLL: { name: "Sierra Leonean Leone", flag: "🇸🇱", symbol: "Le" },
    SOS: { name: "Somali Shilling", flag: "🇸🇴", symbol: "Sh" },
    SRD: { name: "Surinamese Dollar", flag: "🇸🇷", symbol: "$" },
    SSP: { name: "South Sudanese Pound", flag: "🇸🇸", symbol: "£" },
    STN: { name: "São Tomé and Príncipe Dobra", flag: "🇸🇹", symbol: "Db" },
    SYP: { name: "Syrian Pound", flag: "🇸🇾", symbol: "£" },
    SZL: { name: "Swazi Lilangeni", flag: "🇸🇿", symbol: "L" },
    THB: { name: "Thai Baht", flag: "🇹🇭", symbol: "฿" },
    TJS: { name: "Tajikistani Somoni", flag: "🇹🇯", symbol: "ЅМ" },
    TMT: { name: "Turkmenistani Manat", flag: "🇹🇲", symbol: "m" },
    TND: { name: "Tunisian Dinar", flag: "🇹🇳", symbol: "د.ت" },
    TOP: { name: "Tongan Paʻanga", flag: "🇹🇴", symbol: "T$" },
    TRY: { name: "Turkish Lira", flag: "🇹🇷", symbol: "₺" },
    TTD: { name: "Trinidad and Tobago Dollar", flag: "🇹🇹", symbol: "TT$" },
    TWD: { name: "Taiwan Dollar", flag: "🇹🇼", symbol: "NT$" },
    TZS: { name: "Tanzanian Shilling", flag: "🇹🇿", symbol: "Sh" },
    UAH: { name: "Ukrainian Hryvnia", flag: "🇺🇦", symbol: "₴" },
    UGX: { name: "Ugandan Shilling", flag: "🇺🇬", symbol: "Sh" },
    USD: { name: "US Dollar", flag: "🇺🇸", symbol: "$" },
    UYU: { name: "Uruguayan Peso", flag: "🇺🇾", symbol: "$U" },
    UZS: { name: "Uzbekistani Som", flag: "🇺🇿", symbol: "сўм" },
    VES: { name: "Venezuelan Bolívar", flag: "🇻🇪", symbol: "Bs." },
    VND: { name: "Vietnamese Đồng", flag: "🇻🇳", symbol: "₫" },
    VUV: { name: "Vanuatu Vatu", flag: "🇻🇺", symbol: "Vt" },
    WST: { name: "Samoan Tala", flag: "🇼🇸", symbol: "T" },
    XAF: { name: "Central African CFA Franc", flag: "🌍", symbol: "Fr" },
    XCD: { name: "East Caribbean Dollar", flag: "🌍", symbol: "$" },
    XOF: { name: "West African CFA Franc", flag: "🌍", symbol: "Fr" },
    XPF: { name: "CFP Franc", flag: "🌍", symbol: "Fr" },
    YER: { name: "Yemeni Rial", flag: "🇾🇪", symbol: "﷼" },
    ZAR: { name: "South African Rand", flag: "🇿🇦", symbol: "R" },
    ZMW: { name: "Zambian Kwacha", flag: "🇿🇲", symbol: "ZK" },
    ZWL: { name: "Zimbabwean Dollar", flag: "🇿🇼", symbol: "$" }
};

// ===== Application State =====
const appState = {
    currentRates: {},
    lastUpdated: null,
    favorites: [],
    history: [],
    isOnline: true
};

// ===== DOM Elements =====
const DOM = {
    fromAmount: document.getElementById('fromAmount'),
    toAmount: document.getElementById('toAmount'),
    fromCurrency: document.getElementById('fromCurrency'),
    toCurrency: document.getElementById('toCurrency'),
    fromFlag: document.getElementById('fromFlag'),
    toFlag: document.getElementById('toFlag'),
    convertBtn: document.getElementById('convertBtn'),
    swapBtn: document.getElementById('swapBtn'),
    copyBtn: document.getElementById('copyBtn'),
    resetBtn: document.getElementById('resetBtn'),
    exchangeRate: document.getElementById('exchangeRate'),
    lastUpdated: document.getElementById('lastUpdated'),
    rateInfo: document.getElementById('rateInfo'),
    errorMessage: document.getElementById('errorMessage'),
    spinner: document.getElementById('spinner'),
    offlineIndicator: document.getElementById('offlineIndicator'),
    themeToggle: document.getElementById('themeToggle'),
    historyList: document.getElementById('historyList'),
    clearHistoryBtn: document.getElementById('clearHistoryBtn'),
    topRatesGrid: document.getElementById('topRatesGrid'),
    favoritesList: document.getElementById('favoritesList'),
    quickBtns: document.querySelectorAll('.quick-btn')
};

// ===== Initialize Application =====
document.addEventListener('DOMContentLoaded', () => {
    console.log('🚀 Initializing Currency Converter...');
    initializeCurrencies();
    loadFromLocalStorage();
    initializeTheme();
    attachEventListeners();
    fetchExchangeRates();
    displayTopRates();
    updateUI();
});

// ===== Initialize Currency Dropdowns =====
function initializeCurrencies() {
    const currencyCodes = Object.keys(currencyData).sort();
    
    currencyCodes.forEach(code => {
        const option = document.createElement('option');
        option.value = code;
        option.textContent = `${code} - ${currencyData[code].name}`;
        DOM.fromCurrency.appendChild(option.cloneNode(true));
        DOM.toCurrency.appendChild(option);
    });

    // Set default currencies
    DOM.fromCurrency.value = 'USD';
    DOM.toCurrency.value = 'EUR';
    updateFlagAndSymbol();
}

// ===== Event Listeners =====
function attachEventListeners() {
    console.log('📌 Attaching event listeners...');
    
    // Conversion input listeners
    DOM.fromAmount.addEventListener('input', () => {
        clearError();
        if (validateInput(DOM.fromAmount.value)) {
            performConversion();
        }
    });

    DOM.fromCurrency.addEventListener('change', () => {
        clearError();
        updateFlagAndSymbol();
        performConversion();
    });

    DOM.toCurrency.addEventListener('change', () => {
        clearError();
        updateFlagAndSymbol();
        performConversion();
    });

    // Buttons
    DOM.convertBtn.addEventListener('click', performConversion);
    DOM.swapBtn.addEventListener('click', swapCurrencies);
    DOM.copyBtn.addEventListener('click', copyResult);
    DOM.resetBtn.addEventListener('click', resetConverter);
    DOM.clearHistoryBtn.addEventListener('click', clearHistory);
    DOM.themeToggle.addEventListener('click', toggleTheme);

    // Quick currency buttons
    DOM.quickBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            const currency = e.target.dataset.currency;
            DOM.fromCurrency.value = currency;
            DOM.quickBtns.forEach(b => b.classList.remove('active'));
            e.target.classList.add('active');
            updateFlagAndSymbol();
            performConversion();
        });
    });

    // Handle offline/online
    window.addEventListener('online', () => {
        console.log('🌐 Back online!');
        appState.isOnline = true;
        DOM.offlineIndicator.style.display = 'none';
        fetchExchangeRates();
    });

    window.addEventListener('offline', () => {
        console.log('📴 Going offline...');
        appState.isOnline = false;
        showError('No internet connection. Using cached rates.');
        DOM.offlineIndicator.style.display = 'flex';
    });
}

// ===== Currency Conversion Logic =====
function performConversion() {
    const fromCurrency = DOM.fromCurrency.value;
    const toCurrency = DOM.toCurrency.value;
    const amount = parseFloat(DOM.fromAmount.value);

    // Validation
    if (!validateInput(amount)) {
        DOM.toAmount.value = '';
        DOM.rateInfo.style.display = 'none';
        return;
    }

    if (fromCurrency === toCurrency) {
        DOM.toAmount.value = amount.toFixed(2);
        updateRateInfo(1, fromCurrency, toCurrency);
        return;
    }

    // Get conversion rate
    if (!appState.currentRates[fromCurrency] || !appState.currentRates[fromCurrency][toCurrency]) {
        showError('Exchange rate not available. Please try again.');
        return;
    }

    const rate = appState.currentRates[fromCurrency][toCurrency];
    const convertedAmount = amount * rate;

    DOM.toAmount.value = convertedAmount.toFixed(2);
    updateRateInfo(rate, fromCurrency, toCurrency);

    // Add to history
    addToHistory(fromCurrency, toCurrency, amount, convertedAmount);
}

// ===== Update Rate Information =====
function updateRateInfo(rate, fromCurrency, toCurrency) {
    DOM.exchangeRate.textContent = `1 ${fromCurrency} = ${rate.toFixed(6)} ${toCurrency}`;
    
    if (appState.lastUpdated) {
        const lastUpdatedTime = new Date(appState.lastUpdated).toLocaleString();
        DOM.lastUpdated.textContent = lastUpdatedTime;
    }
    
    DOM.rateInfo.style.display = 'grid';
}

// ===== Fetch Exchange Rates from API =====
async function fetchExchangeRates() {
    console.log('🔄 Fetching exchange rates...');
    showSpinner(true);
    clearError();

    try {
        // Using open.er-api.com as a free public rates API with no access key required
        const response = await fetch('https://open.er-api.com/v6/latest/USD');
        
        if (!response.ok) {
            throw new Error(`HTTP Error: ${response.status}`);
        }

        const data = await response.json();
        
        if (!data || data.result !== 'success' || !data.rates) {
            throw new Error('Invalid rate data from API');
        }

        // Build rates object - convert all to base USD
        const baseRates = { ...data.rates, USD: 1 };
        
        // Create bidirectional rates
        appState.currentRates = {};
        const allCurrencies = Object.keys(currencyData);
        
        allCurrencies.forEach(from => {
            appState.currentRates[from] = {};
            allCurrencies.forEach(to => {
                if (baseRates[from] !== undefined && baseRates[to] !== undefined) {
                    appState.currentRates[from][to] = baseRates[to] / baseRates[from];
                }
            });
        });

        appState.lastUpdated = new Date().toISOString();
        appState.isOnline = true;
        DOM.offlineIndicator.style.display = 'none';
        
        // Save to localStorage
        saveToLocalStorage();
        
        // Perform conversion after rates are loaded
        performConversion();
        displayTopRates();
        
        console.log('✅ Exchange rates updated successfully');
    } catch (error) {
        console.error('❌ Error fetching rates:', error);
        
        // Try to use cached rates
        const cachedRates = localStorage.getItem('currencyRates');
        if (cachedRates) {
            try {
                const parsed = JSON.parse(cachedRates);
                appState.currentRates = parsed.currentRates;
                appState.lastUpdated = parsed.lastUpdated;
                appState.isOnline = false;
                DOM.offlineIndicator.style.display = 'flex';
                showError('Failed to fetch live rates. Using cached data.');
                performConversion();
                displayTopRates();
            } catch (e) {
                showError('Unable to fetch rates and no cache available. Please check your connection.');
            }
        } else {
            showError('Unable to fetch exchange rates. Please check your internet connection.');
        }
    } finally {
        showSpinner(false);
    }
}

// ===== Display Top Exchange Rates =====
function displayTopRates() {
    console.log('📊 Displaying top rates...');
    const topCurrencies = ['USD', 'EUR', 'GBP', 'INR', 'JPY'];
    DOM.topRatesGrid.innerHTML = '';

    topCurrencies.forEach(currency => {
        if (appState.currentRates['USD'] && appState.currentRates['USD'][currency]) {
            const rate = appState.currentRates['USD'][currency];
            const data = currencyData[currency];
            
            const rateCard = document.createElement('div');
            rateCard.className = 'rate-card';
            rateCard.innerHTML = `
                <div class="rate-card-flag">${data.flag}</div>
                <div class="rate-card-currency">${currency}</div>
                <div class="rate-card-value">${rate.toFixed(4)}</div>
            `;
            DOM.topRatesGrid.appendChild(rateCard);
        }
    });
}

// ===== Utility Functions =====

// Validate input
function validateInput(value) {
    const num = parseFloat(value);
    if (isNaN(num) || num < 0 || value === '') {
        showError('Please enter a valid positive number');
        return false;
    }
    if (num === 0) {
        showError('Amount cannot be zero');
        return false;
    }
    return true;
}

// Update flag and symbol display
function updateFlagAndSymbol() {
    const fromCode = DOM.fromCurrency.value;
    const toCode = DOM.toCurrency.value;
    
    if (currencyData[fromCode]) {
        DOM.fromFlag.textContent = currencyData[fromCode].flag;
    }
    if (currencyData[toCode]) {
        DOM.toFlag.textContent = currencyData[toCode].flag;
    }
}

// Swap currencies
function swapCurrencies() {
    console.log('🔄 Swapping currencies...');
    const temp = DOM.fromCurrency.value;
    DOM.fromCurrency.value = DOM.toCurrency.value;
    DOM.toCurrency.value = temp;
    
    updateFlagAndSymbol();
    performConversion();
}

// Copy result to clipboard
function copyResult() {
    const text = `${DOM.fromAmount.value} ${DOM.fromCurrency.value} = ${DOM.toAmount.value} ${DOM.toCurrency.value}`;
    navigator.clipboard.writeText(text).then(() => {
        showTemporaryMessage('✅ Copied to clipboard!');
    }).catch(() => {
        showError('Failed to copy. Please try again.');
    });
}

// Show temporary message
function showTemporaryMessage(message) {
    const oldError = DOM.errorMessage.innerHTML;
    DOM.errorMessage.textContent = message;
    DOM.errorMessage.style.display = 'flex';
    DOM.errorMessage.style.backgroundColor = 'rgba(16, 185, 129, 0.1)';
    DOM.errorMessage.style.borderColor = '#10b981';
    DOM.errorMessage.style.color = '#10b981';
    
    setTimeout(() => {
        DOM.errorMessage.style.display = 'none';
    }, 2000);
}

// Show error
function showError(message) {
    DOM.errorMessage.textContent = message;
    DOM.errorMessage.style.display = 'flex';
}

// Clear error
function clearError() {
    DOM.errorMessage.style.display = 'none';
}

// Show/hide spinner
function showSpinner(show) {
    DOM.spinner.style.display = show ? 'flex' : 'none';
}

// Reset converter
function resetConverter() {
    console.log('🔄 Resetting converter...');
    DOM.fromAmount.value = '1';
    DOM.fromCurrency.value = 'USD';
    DOM.toCurrency.value = 'EUR';
    DOM.toAmount.value = '';
    DOM.rateInfo.style.display = 'none';
    clearError();
    updateFlagAndSymbol();
}

// ===== History Management =====

// Add to history
function addToHistory(from, to, fromAmount, toAmount) {
    const historyItem = {
        id: Date.now(),
        from,
        to,
        fromAmount,
        toAmount,
        timestamp: new Date().toISOString(),
        isFavorite: false
    };

    // Keep only last 50 conversions
    appState.history.unshift(historyItem);
    if (appState.history.length > 50) {
        appState.history.pop();
    }

    saveToLocalStorage();
    updateHistoryDisplay();
}

// Update history display
function updateHistoryDisplay() {
    if (appState.history.length === 0) {
        DOM.historyList.innerHTML = '<p class="empty-message">No conversion history yet.</p>';
        return;
    }

    DOM.historyList.innerHTML = '';
    appState.history.forEach(item => {
        const historyEl = document.createElement('div');
        historyEl.className = 'history-item';
        
        const date = new Date(item.timestamp);
        const timeAgo = getTimeAgo(date);
        
        historyEl.innerHTML = `
            <div class="history-conversion">
                <div class="conversion-details">
                    <div class="conversion-text">
                        ${item.fromAmount.toFixed(2)} ${item.from} → ${item.toAmount.toFixed(2)} ${item.to}
                    </div>
                    <div class="conversion-time">${timeAgo}</div>
                </div>
            </div>
            <div class="history-actions">
                <button class="history-btn copy" title="Copy">
                    <i class="fas fa-copy"></i>
                </button>
                <button class="history-btn favorite ${item.isFavorite ? 'active' : ''}" title="Add to favorites">
                    <i class="fas fa-star"></i>
                </button>
                <button class="history-btn delete" title="Delete">
                    <i class="fas fa-trash"></i>
                </button>
            </div>
        `;

        // Event listeners for history item actions
        historyEl.querySelector('.copy').addEventListener('click', () => {
            const text = `${item.fromAmount.toFixed(2)} ${item.from} = ${item.toAmount.toFixed(2)} ${item.to}`;
            navigator.clipboard.writeText(text);
            showTemporaryMessage('✅ Copied to clipboard!');
        });

        historyEl.querySelector('.favorite').addEventListener('click', (e) => {
            item.isFavorite = !item.isFavorite;
            e.currentTarget.classList.toggle('active');
            updateFavoritesDisplay();
            saveToLocalStorage();
        });

        historyEl.querySelector('.delete').addEventListener('click', () => {
            appState.history = appState.history.filter(h => h.id !== item.id);
            saveToLocalStorage();
            updateHistoryDisplay();
        });

        DOM.historyList.appendChild(historyEl);
    });
}

// Clear history
function clearHistory() {
    if (confirm('Are you sure you want to clear all history?')) {
        appState.history = [];
        appState.favorites = [];
        saveToLocalStorage();
        updateHistoryDisplay();
        updateFavoritesDisplay();
        console.log('🗑️ History cleared');
    }
}

// Get time ago string
function getTimeAgo(date) {
    const seconds = Math.floor((new Date() - date) / 1000);
    
    if (seconds < 60) return 'just now';
    if (seconds < 3600) return Math.floor(seconds / 60) + 'm ago';
    if (seconds < 86400) return Math.floor(seconds / 3600) + 'h ago';
    return Math.floor(seconds / 86400) + 'd ago';
}

// ===== Favorites Management =====

// Update favorites display
function updateFavoritesDisplay() {
    const favorites = appState.history.filter(item => item.isFavorite);
    
    if (favorites.length === 0) {
        DOM.favoritesList.innerHTML = '<p class="empty-message">No favorites yet. Add from history!</p>';
        return;
    }

    DOM.favoritesList.innerHTML = '';
    favorites.forEach(item => {
        const favoriteEl = document.createElement('div');
        favoriteEl.className = 'favorite-item';
        favoriteEl.style.cursor = 'pointer';
        
        const fromData = currencyData[item.from];
        const toData = currencyData[item.to];
        const rate = item.toAmount / item.fromAmount;
        
        favoriteEl.innerHTML = `
            <div class="favorite-info">
                <span>${fromData.flag}</span>
                <span style="font-weight: 600;">${item.from}</span>
                <i class="fas fa-arrow-right" style="font-size: 0.8rem; color: #64748b;"></i>
                <span>${toData.flag}</span>
                <span style="font-weight: 600;">${item.to}</span>
                <span class="favorite-rate">${rate.toFixed(6)}</span>
            </div>
            <button class="remove-favorite" title="Remove from favorites">
                <i class="fas fa-times"></i>
            </button>
        `;

        // Set as conversion pair
        favoriteEl.querySelector('.favorite-info').addEventListener('click', () => {
            DOM.fromCurrency.value = item.from;
            DOM.toCurrency.value = item.to;
            DOM.fromAmount.value = item.fromAmount;
            updateFlagAndSymbol();
            performConversion();
        });

        // Remove from favorites
        favoriteEl.querySelector('.remove-favorite').addEventListener('click', (e) => {
            e.stopPropagation();
            item.isFavorite = false;
            saveToLocalStorage();
            updateFavoritesDisplay();
            updateHistoryDisplay();
        });

        DOM.favoritesList.appendChild(favoriteEl);
    });
}

// ===== Theme Management =====

// Initialize theme
function initializeTheme() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-mode');
        updateThemeIcon(true);
    } else {
        document.body.classList.remove('dark-mode');
        updateThemeIcon(false);
    }
}

// Toggle theme
function toggleTheme() {
    document.body.classList.toggle('dark-mode');
    const isDark = document.body.classList.contains('dark-mode');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
    updateThemeIcon(isDark);
}

// Update theme icon
function updateThemeIcon(isDark) {
    DOM.themeToggle.innerHTML = isDark ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
}

// ===== Local Storage Management =====

// Save to localStorage
function saveToLocalStorage() {
    const dataToSave = {
        currentRates: appState.currentRates,
        lastUpdated: appState.lastUpdated,
        history: appState.history,
        favorites: appState.favorites
    };
    localStorage.setItem('currencyRates', JSON.stringify(dataToSave));
}

// Load from localStorage
function loadFromLocalStorage() {
    const saved = localStorage.getItem('currencyRates');
    if (saved) {
        try {
            const data = JSON.parse(saved);
            appState.currentRates = data.currentRates || {};
            appState.lastUpdated = data.lastUpdated;
            appState.history = data.history || [];
            appState.favorites = data.favorites || [];
            console.log('✅ Data loaded from localStorage');
        } catch (error) {
            console.error('❌ Error loading from localStorage:', error);
        }
    }
}

// ===== UI Update =====

function updateUI() {
    updateHistoryDisplay();
    updateFavoritesDisplay();
}

console.log('✅ Currency Converter loaded successfully!');
