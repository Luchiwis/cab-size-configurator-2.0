const minInnerWidthLabel = document.getElementById('min-inner-width-label');
const maxInnerWidthLabel = document.getElementById('max-inner-width-label');
const minInnerDepthLabel = document.getElementById('min-inner-depth-label');
const maxInnerDepthLabel = document.getElementById('max-inner-depth-label');
const innerWidthValueLabel = document.getElementById('inner-width-value-label');
const innerDepthValueLabel = document.getElementById('inner-depth-value-label');
const rangeInnerWidth = document.getElementById('inner-width');
const rangeInnerDepth = document.getElementById('inner-depth');


sizeType = document.getElementById('size-type');
sizeTypeLabel = document.querySelector('.form-check-label[for="size-type"]');

function updateRangeInfo() {
    if (system == 'mm') {
        innerWidthValueLabel.innerHTML = Math.round(rangeInnerWidth.value) + ' mm';
        minInnerWidthLabel.innerHTML = Math.round(rangeInnerWidth.min) + ' mm';
        maxInnerWidthLabel.innerHTML = Math.round(rangeInnerWidth.max) + ' mm';
        innerDepthValueLabel.innerHTML = Math.round(rangeInnerDepth.value) + ' mm';
        minInnerDepthLabel.innerHTML = Math.round(rangeInnerDepth.min) + ' mm';
        maxInnerDepthLabel.innerHTML = Math.round(rangeInnerDepth.max) + ' mm';
    }
    else if (system == 'in') {
        innerWidthValueLabel.innerHTML = millimetersToInches(rangeInnerWidth.value).toFixed(2) + '"';
        minInnerWidthLabel.innerHTML = millimetersToInches(rangeInnerWidth.min).toFixed(2) + '"';
        maxInnerWidthLabel.innerHTML = millimetersToInches(rangeInnerWidth.max).toFixed(2) + '"';
        innerDepthValueLabel.innerHTML = millimetersToInches(rangeInnerDepth.value).toFixed(2) + '"';
        minInnerDepthLabel.innerHTML = millimetersToInches(rangeInnerDepth.min).toFixed(2) + '"';
        maxInnerDepthLabel.innerHTML = millimetersToInches(rangeInnerDepth.max).toFixed(2) + '"';
}

}

const observer = new MutationObserver(updateRangeInfo);

rangeInnerWidth.addEventListener('input', updateRangeInfo);
rangeInnerDepth.addEventListener('input', updateRangeInfo);

observer.observe(rangeInnerWidth, { attributes: true });
observer.observe(rangeInnerDepth, { attributes: true });