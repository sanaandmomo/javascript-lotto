import LottosView from '../EventListener/LottosView.js';
import { $ } from '../utils/index.js';

export default class LottosViewImpl extends LottosView {
  constructor() {
    super();
    this.$input = $('#fare-input');
    this.$lottoCount = $('#lotto-count');
    this.$lottoContainer = $('#lottos-container');
  }

  render({ lottos, remainFare }) {
    this.renderDefaultLottoArea(lottos.length);
    this.renderDetailLottoArea(lottos);
    this.$lottoCount.innerText = lottos.length;
    this.setInputValue(remainFare);
  }

  renderDefaultLottoArea(count) {
    this.$lottoContainer.querySelector('.lottos.default').innerHTML =
      '<p class="lotto">🎟️</p>'.repeat(count);
  }

  renderDetailLottoArea(lottos) {
    this.$lottoContainer.querySelector('.lottos.detail').innerHTML = lottos
      .map(
        (lotto) => `<p class="lotto">
          🎟️<span class="lotto-number">${lotto.join(', ')}</span>
      </p>`,
      )
      .join('');
  }

  toggleContainer() {
    this.$lottoContainer.classList.toggle('detail');
  }

  resetView() {
    this.$lottoContainer.querySelector('.lottos.default').innerHTML = '';
    this.$lottoContainer.querySelector('.lottos.detail').innerHTML = '';
    this.$lottoContainer.classList.remove('detail');
    $('#lotto-viewer-controller').checked = false;
    this.$lottoCount.innerText = 0;
  }

  getInputValue() {
    return this.$input.value;
  }

  setInputValue(value) {
    this.$input.value = value;
  }

  focusInput() {
    this.$input.focus();
  }
}
