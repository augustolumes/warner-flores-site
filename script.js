// Contato e catálogo.
const WHATSAPP_NUMBER = "5582996808398";

const products = [
  { id: "1A", title: "Arco de Áster Branco & Arranjos de Banco", shortTitle: "Arco de Áster Branco", image: "imagens/opcao-1a-arco-aster-branco.jpeg", alt: "Arco de áster branco e arranjos nos bancos", description: "Uma entrada grandiosa em flores brancas, acompanhada de arranjos delicados ao longo da nave.", includes: ["Arco de entrada com áster branco", "Arranjos volumosos nos bancos", "Passadeira em tom neutro"], tags: ["arcos", "corredor"] },
  { id: "1B", title: "Arco de Áster Branco & Passadeira Verde", shortTitle: "Áster Branco & Passadeira Verde", image: "imagens/opcao-1b-arco-aster-passadeira-verde.jpeg", gallery: ["imagens/opcao-1b-arco-aster-passadeira-verde.jpeg", "imagens/opcao-1b-arco-aster-passadeira-verde-2.jpeg"], alt: "Arco de áster branco com passadeira verde", description: "Flores brancas, corredor verde e uma composição contínua que conduz até o altar.", includes: ["Arco de entrada em áster branco", "Passadeira verde até o altar", "Arranjos contínuos nos bancos", "Iluminação focal na base do arco"], tags: ["arcos", "corredor", "passadeira"] },
  { id: "1C", title: "Arco Iluminado com Focos de Luz no Chão", shortTitle: "Arco Iluminado com Focos", image: "imagens/opcao-1c-arco-iluminado-focos.jpeg", alt: "Arco iluminado com focos de luz no chão", description: "Uma composição luminosa e elegante para destacar a entrada da cerimônia.", includes: ["Arco denso de áster branco", "Pontos de iluminação cênica de LED", "Passadeira verde escuro", "Pequenos buquês nos bancos"], tags: ["arcos", "corredor", "passadeira", "luz"] },
  { id: "1D", title: "Arco Iluminado com Faixas Laterais", shortTitle: "Arco Iluminado com Faixas", image: "imagens/opcao-1d-arco-iluminado-faixas.jpeg", gallery: ["imagens/opcao-1d-arco-iluminado-faixas.jpeg", "imagens/portfolio-igreja-01.jpeg"], alt: "Arco iluminado com faixas laterais de arranjos", description: "Luz cênica e faixas de arranjos que acompanham o corredor até o altar.", includes: ["Arco de entrada iluminado", "Faixas laterais de arranjos", "Iluminação cênica para realçar as flores"], tags: ["arcos", "corredor", "luz"] },
  { id: "2A", title: "Arco de Flores Silvestres & Passadeira Vermelha", shortTitle: "Flores Silvestres & Vermelha", image: "imagens/opcao-2a-arco-silvestre-passadeira-vermelha.jpeg", alt: "Arco de flores silvestres com passadeira vermelha", description: "Flores silvestres e uma passadeira vermelha clássica para uma cerimônia acolhedora.", includes: ["Arco leve de flores e folhagens", "Passadeira vermelha até o presbitério", "Mini buquês nos bancos"], tags: ["arcos", "corredor", "passadeira"] },
  { id: "3A", title: "Arranjos de Altar & Nichos de Imagens", shortTitle: "Arranjos de Altar", image: "imagens/portfolio-igreja-01.jpeg", alt: "Arranjos florais para altar de igreja", description: "Composição floral em tons de branco e verde para ornamentar o altar e os nichos.", includes: ["Arranjo central para o altar", "Arranjos nos nichos laterais", "Composição floral em branco e verde"], tags: ["altar", "igrejas"] }
];

const prices = {
  P: { 2: 25, 3: 35, 4: 40, 5: 50, 6: 60, 7: 70, 8: 80, 9: 90, 10: 100, 12: 120, 15: 150, 24: 240 },
  G: { 2: 35, 3: 50, 4: 60, 5: 75, 6: 90, 7: 105, 8: 120, 9: 135, 10: 150, 12: 180, 15: 225, 24: 360 }
};

// Edite nome e tipo para atualizar automaticamente os cartões e filtros. tipo aceita: presentes, noivas ou todos.
const readyBouquets = [
  { id: 1, nome: "Buquê 1", tipo: "presentes", image: "imagens/buques/1.buque_150.jpeg", price: 150 },
  { id: 2, nome: "Buquê 2", tipo: "presentes", image: "imagens/buques/2.buque_200.jpeg", price: 200 },
  { id: 3, nome: "Buquê 3", tipo: "presentes", image: "imagens/buques/3.buque_150.jpeg", price: 150 },
  { id: 4, nome: "Buquê 4", tipo: "presentes", image: "imagens/buques/4.buque_450_rosa_100.jpeg", price: 450 },
  { id: 5, nome: "Buquê 5", tipo: "presentes", image: "imagens/buques/5.buque_70.jpeg", price: 70 },
  { id: 6, nome: "Buquê 6", tipo: "presentes", image: "imagens/buques/6.buque_150.jpeg", price: 150 },
  { id: 7, nome: "Buquê 7", tipo: "presentes", image: "imagens/buques/7.buque_150.jpeg", price: 150 },
  { id: 8, nome: "Buquê 8", tipo: "presentes", image: "imagens/buques/8_boque_00.jpeg", price: 0 },
  { id: 9, nome: "Buquê 9", tipo: "presentes", image: "imagens/buques/9.buque_90.jpeg", price: 90 },
  { id: 10, nome: "Buquê 10", tipo: "presentes", image: "imagens/buques/10_buque_200.jpeg", price: 200 },
  { id: 11, nome: "Buquê de noiva 11", tipo: "noivas", image: "imagens/buques/11.buque_sc_noiva.JPG", price: null },
  { id: 12, nome: "Buquê de noiva 12", tipo: "noivas", image: "imagens/buques/12..buque_sc_noiva.JPG", price: null },
  { id: 13, nome: "Buquê de noiva 13", tipo: "noivas", image: "imagens/buques/13a.buque_sc_noiva.JPG", gallery: ["imagens/buques/13a.buque_sc_noiva.JPG", "imagens/buques/13b.buque_sc_noiva.JPG"], price: null },
  { id: 14, nome: "Buquê de noiva 14", tipo: "noivas", image: "imagens/buques/14.buque_sc_noiva.JPG", price: null },
  { id: 15, nome: "Buquê de noiva 15", tipo: "noivas", image: "imagens/buques/15.buque_sc_noiva.JPG", price: null },
  { id: 16, nome: "Buquê de noiva 16", tipo: "noivas", image: "imagens/buques/16.buque_sc_noiva.JPG", price: null },
  { id: 17, nome: "Buquê de noiva 17", tipo: "noivas", image: "imagens/buques/17.buque_sc_noiva.JPG", price: null },
  { id: 18, nome: "Buquê de noiva 18", tipo: "noivas", image: "imagens/buques/18.buque_sc_noiva.JPG", price: null },
  { id: 19, nome: "Buquê de noiva 19", tipo: "noivas", image: "imagens/buques/19.buque_sc_noiva.JPG", price: null },
  { id: 20, nome: "Buquê de noiva 20", tipo: "noivas", image: "imagens/buques/20.buque_sc_noiva.JPG", price: null },
  { id: 21, nome: "Buquê de noiva 21", tipo: "noivas", image: "imagens/buques/21.buque_sc_noiva.JPG", price: null },
  { id: 22, nome: "Buquê de noiva 22", tipo: "noivas", image: "imagens/buques/22.buque_sc_noiva.JPG", price: null },
  { id: 23, nome: "Buquê de noiva 23", tipo: "noivas", image: "imagens/buques/23.buque_sc_noiva.JPG", price: null }
];
const pages = [...document.querySelectorAll(".page")];
const detail = document.getElementById("detailScreen");
const sheet = document.getElementById("budgetSheet");
const backdrop = document.getElementById("sheetBackdrop");
let currentProduct = null;
let currentRequest = { kind: "decoration", label: "Orçamento de decoração" };
let bouquetSize = "P";
let quantity = 5;

// Adiciona contexto da campanha à mensagem sem expor parâmetros vazios.
const queryParams = new URLSearchParams(window.location.search);
const utm = ["utm_source", "utm_campaign", "utm_content"]
  .map((key) => queryParams.get(key))
  .filter(Boolean);
const attribution = utm.length ? utm.join(" · ") : "site";

function trackEvent(eventName, details = {}) {
  if (typeof window.fbq === "function") {
    if (eventName === "PageView") window.fbq("track", "PageView", details);
    else if (eventName === "ViewContent") window.fbq("track", "ViewContent", details);
    else window.fbq("track", "Lead", details);
  }
  if (typeof window.gtag === "function") {
    window.gtag("event", eventName === "PageView" ? "page_view" : eventName === "ViewContent" ? "view_item" : "generate_lead", details);
  }
}

function messageForDirectLink(origin) {
  return `Olá, Warner Flores! Gostaria de conversar sobre ${origin.toLocaleLowerCase("pt-BR")}.\nOrigem: ${attribution}.`;
}

function setWhatsAppLinks() {
  document.querySelectorAll(".direct-whatsapp").forEach((link) => {
    const origin = link.dataset.origin || "contato";
    link.href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(messageForDirectLink(origin))}`;
    link.addEventListener("click", () => trackEvent("Lead", { content_name: origin, content_category: "link direto WhatsApp", source: attribution }));
  });
}
setWhatsAppLinks();

function activatePage(id, { fromHistory = false, scrollY = 0 } = {}) {
  const page = document.getElementById(id);
  if (!page) return;
  if (!fromHistory && window.location.hash !== `#${id}`) {
    const currentPage = pages.find((item) => item.classList.contains("active"));
    history.replaceState({ ...history.state, page: currentPage?.id || "inicio", scrollY: window.scrollY }, "", window.location.href);
    history.pushState({ page: id, scrollY: 0 }, "", `#${id}`);
  }
  pages.forEach((item) => item.classList.toggle("active", item === page));
  document.querySelectorAll(".nav-item").forEach((item) => item.classList.toggle("active", item.dataset.nav === id));
  if (fromHistory) window.scrollTo(0, scrollY);
  else window.scrollTo({ top: 0, behavior: "smooth" });
  trackEvent("PageView", { page_path: `/${id}`, page_title: page.getAttribute("aria-label") || id, source: attribution });
}

document.querySelectorAll("[data-nav]").forEach((link) => link.addEventListener("click", (event) => {
  event.preventDefault();
  activatePage(link.dataset.nav);
}));
document.querySelectorAll("[data-go]").forEach((link) => link.addEventListener("click", (event) => {
  event.preventDefault();
  activatePage(link.dataset.go);
}));

function productCard(product, featured = false) {
  const cardClass = featured ? "highlight-card" : "option-card";
  const buttonClass = featured ? "button button-outline detail-button" : "text-link detail-button";
  const buttonLabel = featured ? "VER DETALHES" : "Solicitar orçamento →";
  const styleLabel = product.id.startsWith("2") ? "ESTILO 02 · " : product.id.startsWith("3") ? "ESTILO 03 · " : "";
  const badge = featured ? `OPÇÃO ${product.id}` : `${styleLabel}OPÇÃO ${product.id}`;
  const imageAction = (product.gallery?.length || 1) > 1 ? "VER MAIS IMAGENS" : "VER IMAGEM EM TELA CHEIA";
  return `<article class="${cardClass}"><div class="${featured ? "highlight-image" : "option-image-wrap"}"><button class="image-gallery-trigger" type="button" data-gallery-product="${product.id}" aria-label="${imageAction.toLocaleLowerCase("pt-BR")} de ${product.shortTitle}"><img src="${product.image}" alt="${product.alt}" width="1200" height="900" loading="lazy"><span class="gallery-trigger-label">${imageAction}</span></button></div><div class="${featured ? "highlight-copy" : "option-body"}"><span class="badge">${badge}</span><h3>${product.shortTitle}</h3><p>${product.description}</p>${featured ? "" : `<ul>${product.includes.slice(0, 3).map((item) => `<li>${item}</li>`).join("")}</ul><p class="investment">Investimento sob consulta</p>`}<button class="${buttonClass}" data-detail="${product.id}">${buttonLabel}</button></div></article>`;
}

const highlights = document.getElementById("homeHighlights");
highlights.innerHTML = products.slice(0, 4).map((item) => productCard(item, true)).join("") + `
  <button class="carousel-end-link" type="button" data-home-catalog>
    <span>Ver catálogo completo</span><span aria-hidden="true">→</span>
  </button>`;
const productList = document.getElementById("productList");
const churchProductList = document.getElementById("churchProductList");
const productLists = [productList, churchProductList].filter(Boolean);
let activeCatalogFilter = "todos";
let searchTerm = "";

function renderProducts() {
  const normalizedQuery = searchTerm.trim().toLocaleLowerCase("pt-BR");
  const filtered = products.filter((product) => {
    const tagMatch = activeCatalogFilter === "todos"
      || (activeCatalogFilter === "style01" && product.id.startsWith("1"))
      || product.tags.includes(activeCatalogFilter);
    const queryMatch = !normalizedQuery || `${product.id} ${product.title} ${product.description} ${product.includes.join(" ")}`.toLocaleLowerCase("pt-BR").includes(normalizedQuery);
    return tagMatch && queryMatch;
  });
  productLists.forEach((list) => {
    list.innerHTML = filtered.length ? filtered.map((item) => productCard(item)).join("") : "<p class='empty-state'>Não encontramos opções. Tente outra busca.</p>";
    bindDetailButtons(list);
  });
}
renderProducts();

function setSearch(value, source) {
  searchTerm = value;
  const homeSearch = document.getElementById("homeSearch");
  if (homeSearch) homeSearch.value = value;
  const catalogSearch = document.getElementById("catalogSearch");
  if (catalogSearch) catalogSearch.value = value;
  const churchCatalogSearch = document.getElementById("churchCatalogSearch");
  if (churchCatalogSearch) churchCatalogSearch.value = value;
  if (source === "home") {
    activatePage("catalogo");
    if (catalogSearch) catalogSearch.focus({ preventScroll: true });
  }
  renderProducts();
}
const homeSearchInput = document.getElementById("homeSearch");
if (homeSearchInput) {
  homeSearchInput.addEventListener("input", (event) => setSearch(event.target.value, "home"));
}
const catalogSearchInput = document.getElementById("catalogSearch");
if (catalogSearchInput) {
  catalogSearchInput.addEventListener("input", (event) => setSearch(event.target.value, "catalog"));
}
const churchCatalogSearchInput = document.getElementById("churchCatalogSearch");
if (churchCatalogSearchInput) {
  churchCatalogSearchInput.addEventListener("input", (event) => setSearch(event.target.value, "church"));
}

document.querySelectorAll("[data-catalog-filter]").forEach((chip) => chip.addEventListener("click", () => {
  activeCatalogFilter = chip.dataset.catalogFilter;
  document.querySelectorAll("[data-catalog-filter]").forEach((item) => item.classList.toggle("active", item.dataset.catalogFilter === activeCatalogFilter));
  renderProducts();
}));

document.querySelectorAll("[data-filter]").forEach((chip) => chip.addEventListener("click", () => {
  const filter = chip.dataset.filter;
  if (["buques", "igrejas"].includes(filter)) {
    activatePage(filter);
    return;
  }
  activeCatalogFilter = filter === "todos" ? "todos" : filter;
  document.querySelectorAll("[data-catalog-filter]").forEach((item) => item.classList.toggle("active", item.dataset.catalogFilter === activeCatalogFilter));
  const catalogSearch = document.getElementById("catalogSearch");
  if (catalogSearch) catalogSearch.value = "";
  const homeSearch = document.getElementById("homeSearch");
  if (homeSearch) homeSearch.value = "";
  searchTerm = "";
  renderProducts();
  activatePage("catalogo");
}));

// Galeria de detalhes: os controles só aparecem quando há várias fotos.
let galleryIndex = 0;
let galleryStartX = null;

function showGalleryImage(index) {
  const track = document.getElementById("detailGalleryTrack");
  const images = track.querySelectorAll("img");
  if (!images.length) return;
  galleryIndex = (index + images.length) % images.length;
  track.style.transform = `translateX(-${galleryIndex * 100}%)`;
  document.querySelectorAll("#galleryDots button").forEach((dot, dotIndex) => {
    dot.classList.toggle("active", dotIndex === galleryIndex);
    dot.setAttribute("aria-current", dotIndex === galleryIndex ? "true" : "false");
  });
}

function renderGallery(product) {
  const sources = product.gallery || [product.image];
  const track = document.getElementById("detailGalleryTrack");
  const dots = document.getElementById("galleryDots");
  const previous = document.getElementById("galleryPrevious");
  const next = document.getElementById("galleryNext");
  track.innerHTML = sources.map((source, index) => `<img src="${source}" alt="${product.alt}${sources.length > 1 ? ` — foto ${index + 1} de ${sources.length}` : ""}" width="1200" height="1600" ${index === 0 ? "fetchpriority=high" : "loading=lazy"}>`).join("");
  dots.innerHTML = sources.map((_, index) => `<button type="button" aria-label="Ver foto ${index + 1}" aria-current="${index === 0}" class="${index === 0 ? "active" : ""}"></button>`).join("");
  const hasMultiple = sources.length > 1;
  previous.classList.toggle("hidden", !hasMultiple);
  next.classList.toggle("hidden", !hasMultiple);
  dots.classList.toggle("hidden", !hasMultiple);
  dots.querySelectorAll("button").forEach((dot, index) => dot.addEventListener("click", () => showGalleryImage(index)));
  showGalleryImage(0);
}

// Detalhe da decoração e comparação alternam para uma opção distinta.
function openDetail(id) {
  const product = products.find((item) => item.id === id);
  if (!product) return;
  currentProduct = product;
  currentRequest = { kind: "decoration", label: `Opção ${product.id} — ${product.title}` };
  document.getElementById("detailCode").textContent = `Opção ${product.id}`;
  document.getElementById("detailTitle").textContent = product.title;
  document.getElementById("detailDescription").textContent = product.description;
  document.getElementById("detailIncludes").innerHTML = product.includes.map((item) => `<li>${item}</li>`).join("");
  renderGallery(product);
  detail.classList.add("open");
  detail.setAttribute("aria-hidden", "false");
  document.body.classList.add("overlay-open");
  trackEvent("ViewContent", { content_name: product.title, content_ids: [product.id], content_type: "product", source: attribution });
}

function bindDetailButtons(root = document) {
  root.querySelectorAll("[data-detail]").forEach((button) => {
    button.addEventListener("click", () => openDetail(button.dataset.detail));
  });
}
bindDetailButtons();

const photoViewer = document.getElementById("photoViewer");
const photoViewerTrack = document.getElementById("photoViewerTrack");
let photoViewerItems = [];
let photoViewerIndex = 0;
let photoViewerTouchX = null;
let photoViewerOpener = null;

const placeholderGalleries = {
  "gift-p": [{ placeholder: "bouquet-photo-two", label: "[FOTO DO BUQUÊ DE ROSAS P]" }],
  "gift-g": [{ placeholder: "bouquet-photo-three", label: "[FOTO DO BUQUÊ DE ROSAS G]" }],
  rose: [{ placeholder: "bouquet-photo-one", label: "[FOTO DA ROSA DECORADA]" }],
  church: [
    { src: "imagens/portfolio-igreja-01.jpeg", alt: "Exemplo de ornamentação floral de igreja" },
    { src: "imagens/portfolio-igreja-02.jpeg", alt: "Exemplo de arranjos para igreja" }
  ]
};

function updatePhotoViewer(index) {
  if (!photoViewerItems.length) return;
  photoViewerIndex = (index + photoViewerItems.length) % photoViewerItems.length;
  photoViewerTrack.style.transform = `translateX(-${photoViewerIndex * 100}%)`;
  document.getElementById("photoViewerCount").textContent = `${photoViewerIndex + 1} / ${photoViewerItems.length}`;
  document.querySelectorAll("#photoViewerDots button").forEach((dot, dotIndex) => {
    dot.classList.toggle("active", dotIndex === photoViewerIndex);
    dot.setAttribute("aria-current", dotIndex === photoViewerIndex ? "true" : "false");
  });
}

function openPhotoViewer(items, title) {
  if (!photoViewer.classList.contains("open")) {
    photoViewer.dataset.historyClosing = "false";
    history.pushState({ ...history.state, photoViewer: true }, "", window.location.href);
  }
  photoViewerOpener = document.activeElement;
  photoViewerItems = items;
  photoViewerIndex = 0;
  photoViewerTrack.innerHTML = items.map((item) => item.src
    ? `<div class="photo-viewer-slide"><img src="${item.src}" alt="${item.alt || title}" width="1200" height="1600"></div>`
    : `<div class="photo-viewer-slide"><div class="photo-viewer-placeholder ${item.placeholder || ""}"><span>${item.label || "[FOTO DO PRODUTO]"}</span></div></div>`).join("");
  const dots = document.getElementById("photoViewerDots");
  dots.innerHTML = items.map((_, index) => `<button type="button" aria-label="Ver imagem ${index + 1}" aria-current="${index === 0}" class="${index === 0 ? "active" : ""}"></button>`).join("");
  const multiple = items.length > 1;
  document.getElementById("photoViewerPrevious").classList.toggle("hidden", !multiple);
  document.getElementById("photoViewerNext").classList.toggle("hidden", !multiple);
  dots.classList.toggle("hidden", !multiple);
  document.getElementById("photoViewerHint").classList.toggle("hidden", !multiple);
  document.getElementById("photoViewerTitle").textContent = title;
  photoViewer.classList.add("open");
  photoViewer.setAttribute("aria-hidden", "false");
  document.body.classList.add("overlay-open");
  updatePhotoViewer(0);
  document.getElementById("closePhotoViewer").focus();
}

function closePhotoViewer({ fromHistory = false } = {}) {
  if (!fromHistory && history.state?.photoViewer) {
    if (photoViewer.dataset.historyClosing === "true") return;
    photoViewer.dataset.historyClosing = "true";
    history.back();
    return;
  }
  photoViewer.classList.remove("open");
  photoViewer.dataset.historyClosing = "false";
  photoViewer.setAttribute("aria-hidden", "true");
  if (!detail.classList.contains("open") && !sheet.classList.contains("open")) document.body.classList.remove("overlay-open");
  photoViewerOpener?.focus?.();
}

document.addEventListener("click", (event) => {
  const readyBouquetOrder = event.target.closest("[data-ready-bouquet]");
  if (readyBouquetOrder) {
    const bouquet = readyBouquets.find((item) => item.id === Number(readyBouquetOrder.dataset.readyBouquet));
    if (bouquet) openSheet(bouquet.tipo === "noivas" ? "bride" : "gift", `${bouquet.nome} — ${bouquet.price == null ? "Sob consulta" : money(bouquet.price)}`);
    return;
  }
  const readyBouquetTrigger = event.target.closest("[data-gallery-ready-bouquet]");
  if (readyBouquetTrigger) {
    const bouquet = readyBouquets.find((item) => item.id === Number(readyBouquetTrigger.dataset.galleryReadyBouquet));
    if (bouquet) openPhotoViewer((bouquet.gallery || [bouquet.image]).map((src) => ({ src, alt: bouquet.nome })), bouquet.nome);
    return;
  }
  const productTrigger = event.target.closest("[data-gallery-product]");
  if (productTrigger) {
    const product = products.find((item) => item.id === productTrigger.dataset.galleryProduct);
    if (product) openPhotoViewer((product.gallery || [product.image]).map((src) => ({ src, alt: product.alt })), product.title);
    return;
  }
  const placeholderTrigger = event.target.closest("[data-gallery-key]");
  if (placeholderTrigger) {
    const items = placeholderGalleries[placeholderTrigger.dataset.galleryKey];
    if (items) openPhotoViewer(items, placeholderTrigger.dataset.galleryTitle || "Fotos do produto");
  }
});

document.getElementById("closePhotoViewer").addEventListener("click", closePhotoViewer);
document.getElementById("photoViewerPrevious").addEventListener("click", () => updatePhotoViewer(photoViewerIndex - 1));
document.getElementById("photoViewerNext").addEventListener("click", () => updatePhotoViewer(photoViewerIndex + 1));
document.getElementById("photoViewerDots").addEventListener("click", (event) => {
  const dot = event.target.closest("button");
  if (dot) updatePhotoViewer([...event.currentTarget.querySelectorAll("button")].indexOf(dot));
});
const photoViewerStage = document.getElementById("photoViewerStage");
photoViewerStage.addEventListener("touchstart", (event) => { photoViewerTouchX = event.changedTouches[0].screenX; }, { passive: true });
photoViewerStage.addEventListener("touchend", (event) => {
  if (photoViewerTouchX === null) return;
  const delta = event.changedTouches[0].screenX - photoViewerTouchX;
  photoViewerTouchX = null;
  if (Math.abs(delta) > 45 && photoViewerItems.length > 1) updatePhotoViewer(photoViewerIndex + (delta < 0 ? 1 : -1));
}, { passive: true });
document.getElementById("detailGallery").addEventListener("click", (event) => {
  if (!event.target.closest("img") || !currentProduct) return;
  const images = currentProduct.gallery || [currentProduct.image];
  openPhotoViewer(images.map((src) => ({ src, alt: currentProduct.alt })), currentProduct.title);
});

document.getElementById("closeDetail").addEventListener("click", closeDetail);
function closeDetail() {
  detail.classList.remove("open");
  detail.setAttribute("aria-hidden", "true");
  document.body.classList.remove("overlay-open");
}
document.getElementById("detailBudget").addEventListener("click", () => openSheet("decoration", currentRequest.label));
document.getElementById("galleryPrevious").addEventListener("click", () => showGalleryImage(galleryIndex - 1));
document.getElementById("galleryNext").addEventListener("click", () => showGalleryImage(galleryIndex + 1));
document.getElementById("detailGallery").addEventListener("touchstart", (event) => { galleryStartX = event.changedTouches[0].screenX; }, { passive: true });
document.getElementById("detailGallery").addEventListener("touchend", (event) => {
  if (galleryStartX === null) return;
  const delta = event.changedTouches[0].screenX - galleryStartX;
  galleryStartX = null;
  if (Math.abs(delta) > 45) showGalleryImage(galleryIndex + (delta < 0 ? 1 : -1));
}, { passive: true });

// Formulário contextual: decoração, presente ou buquê de noiva.
const formFields = document.getElementById("formFields");
function field(label, name, placeholder, type = "text", required = false) {
  return `<label for="field-${name}">${label}${required ? " *" : ""}</label><input id="field-${name}" name="${name}" type="${type}" placeholder="${placeholder}" ${required ? "required" : ""}>`;
}

function renderForm(kind) {
  if (kind === "gift") {
    formFields.innerHTML = `${field("Seu nome", "name", "Como podemos te chamar?", "text", true)}${field("Data da entrega", "date", "", "date", true)}${field("Horário", "time", "", "time", true)}<label for="field-fulfillment">Entrega ou retirada? *</label><select id="field-fulfillment" name="fulfillment" required><option value="">Escolha uma opção</option><option value="Entrega">Entrega</option><option value="Retirada">Retirada</option></select><div id="addressField">${field("Endereço de entrega", "address", "Rua, número e bairro", "text", true)}</div><label for="field-cardMessage">Mensagem para o cartão (opcional)</label><textarea id="field-cardMessage" name="cardMessage" rows="3" placeholder="Escreva uma mensagem"></textarea>`;
    const fulfillment = document.getElementById("field-fulfillment");
    const addressField = document.getElementById("addressField");
    fulfillment.addEventListener("change", () => {
      addressField.classList.toggle("hidden", fulfillment.value !== "Entrega");
      document.getElementById("field-address").required = fulfillment.value === "Entrega";
    });
    addressField.classList.add("hidden");
    document.getElementById("field-address").required = false;
  } else if (kind === "bride") {
    formFields.innerHTML = `${field("Seu nome", "name", "Como podemos te chamar?", "text", true)}${field("Data do casamento", "weddingDate", "", "date", true)}${field("Igreja ou local", "venue", "Onde será a cerimônia?", "text", true)}<label for="field-style">Estilo desejado *</label><textarea id="field-style" name="style" rows="3" placeholder="Conte sobre as flores, cores ou referências" required></textarea>`;
  } else {
    formFields.innerHTML = `${field("Seu nome", "name", "Como podemos te chamar?", "text", true)}`;
  }
}

function openSheet(kind = "decoration", label = "Orçamento de decoração") {
  currentRequest = { kind, label };
  document.getElementById("selectedOption").textContent = label;
  renderForm(kind);
  sheet.classList.add("open");
  backdrop.classList.add("open");
  sheet.setAttribute("aria-hidden", "false");
  document.body.classList.add("overlay-open");
  setTimeout(() => formFields.querySelector("input, select, textarea")?.focus(), 200);
}

function closeSheet() {
  sheet.classList.remove("open");
  backdrop.classList.remove("open");
  sheet.setAttribute("aria-hidden", "true");
  if (!detail.classList.contains("open")) document.body.classList.remove("overlay-open");
}
document.querySelectorAll("[data-request]").forEach((button) => button.addEventListener("click", () => openSheet("decoration", button.dataset.request)));
document.getElementById("closeSheet").addEventListener("click", closeSheet);
backdrop.addEventListener("click", closeSheet);
document.addEventListener("keydown", (event) => {
  if (photoViewer.classList.contains("open")) {
    if (event.key === "Escape") closePhotoViewer();
    if (event.key === "ArrowLeft") updatePhotoViewer(photoViewerIndex - 1);
    if (event.key === "ArrowRight") updatePhotoViewer(photoViewerIndex + 1);
    return;
  }
  if (event.key === "Escape") {
    if (sheet.classList.contains("open")) closeSheet();
    else if (detail.classList.contains("open")) closeDetail();
  }
});

document.getElementById("budgetForm").addEventListener("submit", (event) => {
  event.preventDefault();
  const data = new FormData(event.currentTarget);
  const lines = ["Olá, Warner Flores! Gostaria de solicitar um orçamento.", "", `Pedido: ${currentRequest.label}`];
  const values = {
    name: "Nome", date: "Data da entrega", time: "Horário",
    fulfillment: "Entrega ou retirada", address: "Endereço",
    cardMessage: "Mensagem para o cartão", weddingDate: "Data do casamento", venue: "Igreja/local", style: "Estilo desejado"
  };
  Object.entries(values).forEach(([key, label]) => {
    const value = String(data.get(key) || "").trim();
    if (value) lines.push(`${label}: ${value}`);
  });
  lines.push(`Origem: ${attribution}.`);
  trackEvent("Lead", { content_name: currentRequest.label, content_category: currentRequest.kind, source: attribution });
  window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(lines.join("\n"))}`, "_blank", "noopener");
});

// Preços informados para rosas e seleção de quantidade.
function money(value) { return `R$ ${value.toFixed(0)}`; }
function bouquetPrice(bouquet) { return bouquet.price == null ? "Sob consulta" : money(bouquet.price); }
const readyBouquetsGrid = document.getElementById("readyBouquets");
const homeBouquetCarousel = document.getElementById("homeBouquetCarousel");
let activeBouquetCategory = "presentes";
function renderReadyBouquets() {
  if (!readyBouquetsGrid) return;
  const visibleBouquets = activeBouquetCategory === "todos"
    ? readyBouquets
    : readyBouquets.filter((bouquet) => bouquet.tipo === activeBouquetCategory || bouquet.tipo === "todos");
  readyBouquetsGrid.innerHTML = visibleBouquets.length ? visibleBouquets.map((bouquet) => `
    <article class="ready-bouquet-card">
      <button class="ready-bouquet-photo" type="button" data-gallery-ready-bouquet="${bouquet.id}" aria-label="Ampliar foto de ${bouquet.nome}">
        <img src="${bouquet.image}" alt="${bouquet.nome}" loading="lazy">
      </button>
      <h3 class="ready-bouquet-name">${bouquet.nome}</h3>
      <p class="ready-bouquet-description">${bouquet.description || ""}</p>
      <strong class="ready-bouquet-price ${bouquet.price == null ? "price-on-request" : ""}">${bouquetPrice(bouquet)}</strong>
      <button class="button button-outline ready-bouquet-order" type="button" data-ready-bouquet="${bouquet.id}">Pedir este buquê</button>
    </article>`).join("") : `<p class="empty-state">Ainda não há buquês cadastrados nesta categoria.</p>`;
}
document.querySelectorAll("[data-bouquet-category]").forEach((chip) => chip.addEventListener("click", () => {
  activeBouquetCategory = chip.dataset.bouquetCategory;
  document.querySelectorAll("[data-bouquet-category]").forEach((item) => {
    const active = item === chip;
    item.classList.toggle("active", active);
    item.setAttribute("aria-selected", String(active));
  });
  document.getElementById("giftCategoryContent").classList.toggle("hidden", activeBouquetCategory === "noivas");
  document.getElementById("bridalCategoryContent").classList.toggle("hidden", activeBouquetCategory === "presentes");
  renderReadyBouquets();
}));
document.querySelector("[data-bouquet-bride-request]")?.addEventListener("click", () => openSheet("bride", "Buquê de noiva sob encomenda"));
renderReadyBouquets();
if (homeBouquetCarousel) {
  homeBouquetCarousel.innerHTML = readyBouquets.slice(0, 6).map((bouquet) => `
    <article class="home-bouquet-card">
      <button class="home-bouquet-photo" type="button" data-gallery-ready-bouquet="${bouquet.id}" aria-label="Ampliar foto de ${bouquet.nome}">
        <img src="${bouquet.image}" alt="${bouquet.nome}" loading="lazy">
      </button>
      <div class="home-bouquet-copy">
        <h3>${bouquet.nome}</h3>
        <strong>${bouquetPrice(bouquet)}</strong>
        <button class="button button-outline" type="button" data-ready-bouquet="${bouquet.id}">PEDIR ESTE BUQUÊ</button>
      </div>
    </article>`).join("") + `
    <button class="carousel-end-link" type="button" data-home-bouquets>
      <span>Ver todos os buquês</span><span aria-hidden="true">→</span>
    </button>`;
}
document.querySelector("[data-home-catalog]")?.addEventListener("click", () => activatePage("catalogo"));
document.querySelector("[data-home-bouquets]")?.addEventListener("click", () => activatePage("buques"));
function renderQuantities() {
  const quantities = Object.keys(prices[bouquetSize]).map(Number);
  const quantitySelect = document.getElementById("quantitySelect");
  quantitySelect.innerHTML = quantities.map((amount) => `<option value="${amount}" ${amount === quantity ? "selected" : ""}>${amount} rosas · ${money(prices[bouquetSize][amount])}</option>`).join("");
  document.getElementById("bouquetOrder").textContent = `PEDIR ${quantity} ROSAS ${bouquetSize} · ${money(prices[bouquetSize][quantity])}`;
}
document.getElementById("quantitySelect").addEventListener("change", (event) => {
  quantity = Number(event.target.value);
  renderQuantities();
});
document.querySelectorAll(".segment-option").forEach((button) => button.addEventListener("click", () => {
  bouquetSize = button.dataset.size;
  document.querySelectorAll(".segment-option").forEach((item) => item.classList.toggle("active", item === button));
  renderQuantities();
}));
document.getElementById("bouquetOrder").addEventListener("click", () => openSheet("gift", `Buquê de ${quantity} rosas tamanho ${bouquetSize} — ${money(prices[bouquetSize][quantity])}`));
document.querySelectorAll("[data-gift-request]").forEach((button) => button.addEventListener("click", (event) => openSheet("gift", event.currentTarget.dataset.giftRequest)));
renderQuantities();

document.querySelectorAll("[data-bouquet-shift]").forEach((button) => button.addEventListener("click", () => {
  homeBouquetCarousel.scrollBy({ left: Number(button.dataset.bouquetShift) * homeBouquetCarousel.clientWidth * 0.8, behavior: "smooth" });
}));

// Carrossel acessível por rolagem horizontal na home.
document.querySelectorAll(".category-chips .chip").forEach((chip) => chip.addEventListener("click", () => {
  document.querySelectorAll(".category-chips .chip").forEach((item) => item.classList.toggle("active", item === chip));
  const category = chip.dataset.filter;
  if (category === "todos") {
    activeCatalogFilter = "todos";
    document.querySelectorAll("[data-catalog-filter]").forEach((item) => item.classList.toggle("active", item.dataset.catalogFilter === "todos"));
    setSearch("", "catalog");
    activatePage("inicio");
  }
  else if (category === "arcos" || category === "corredor") {
    activeCatalogFilter = category;
    document.querySelectorAll("[data-catalog-filter]").forEach((item) => item.classList.toggle("active", item.dataset.catalogFilter === "todos"));
    renderProducts();
    activatePage("catalogo");
  } else activatePage(category);
}));

document.getElementById("year").textContent = new Date().getFullYear();
window.history.scrollRestoration = "manual";
window.addEventListener("popstate", (event) => {
  if (photoViewer.classList.contains("open")) closePhotoViewer({ fromHistory: true });
  const hashPageId = window.location.hash.slice(1);
  const pageId = pages.some((page) => page.id === event.state?.page)
    ? event.state.page
    : pages.some((page) => page.id === hashPageId) ? hashPageId : "inicio";
  activatePage(pageId, { fromHistory: true, scrollY: Number(event.state?.scrollY) || 0 });
});
const initialPage = window.location.hash.slice(1);
const initialPageId = pages.some((page) => page.id === initialPage) ? initialPage : "inicio";
if (initialPage) activatePage(initialPageId, { fromHistory: true, scrollY: window.scrollY });
history.replaceState({ ...history.state, page: initialPageId, scrollY: window.scrollY }, "", window.location.href);
