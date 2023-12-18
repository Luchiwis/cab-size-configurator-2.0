minInnerWidthLabel = document.getElementById('min-inner-width-label');
maxInnerWidthLabel = document.getElementById('max-inner-width-label');
minInnerDepthLabel = document.getElementById('min-inner-depth-label');
maxInnerDepthLabel = document.getElementById('max-inner-depth-label');
innerWidthValueLabel = document.getElementById('inner-width-value-label');
innerDepthValueLabel = document.getElementById('inner-depth-value-label');
rangeInnerWidth = document.getElementById('inner-width');
rangeInnerDepth = document.getElementById('inner-depth');


sizeType = document.getElementById('size-type');
sizeTypeLabel = document.querySelector('.form-check-label[for="size-type"]');

function updateRangeInfo() {
    innerWidthValueLabel.innerHTML = rangeInnerWidth.value;
    minInnerWidthLabel.innerHTML = rangeInnerWidth.min;
    maxInnerWidthLabel.innerHTML = rangeInnerWidth.max;
    innerDepthValueLabel.innerHTML = rangeInnerDepth.value;
    minInnerDepthLabel.innerHTML = rangeInnerDepth.min;
    maxInnerDepthLabel.innerHTML = rangeInnerDepth.max;

}

const observer = new MutationObserver(updateRangeInfo);

rangeInnerWidth.addEventListener('input', updateRangeInfo);
rangeInnerDepth.addEventListener('input', updateRangeInfo);

observer.observe(rangeInnerWidth, { attributes: true });
observer.observe(rangeInnerDepth, { attributes: true });