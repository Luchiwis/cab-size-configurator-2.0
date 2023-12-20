const MM_WALL_THICKNESS = 38.1;

const minInnerWidthLabel = document.getElementById('min-inner-width-label');
const maxInnerWidthLabel = document.getElementById('max-inner-width-label');
const minInnerDepthLabel = document.getElementById('min-inner-depth-label');
const maxInnerDepthLabel = document.getElementById('max-inner-depth-label');
const innerWidthValueLabel = document.getElementById('inner-width-value-label');
const innerDepthValueLabel = document.getElementById('inner-depth-value-label');
const rangeInnerWidth = document.getElementById('inner-width');
const rangeInnerDepth = document.getElementById('inner-depth');

const innerWidthTableLabel = document.getElementById('inner-width-table-label');
const innerDepthTableLabel = document.getElementById('inner-depth-table-label');
const overallWidthTableLabel = document.getElementById('overall-width-table-label');
const overallDepthTableLabel = document.getElementById('overall-depth-table-label');


sizeType = document.getElementById('size-type');
sizeTypeLabel = document.querySelector('.form-check-label[for="size-type"]');

function updateRangeInfo() {
    const urlParams = new URLSearchParams(window.location.search);
    const type = urlParams.get('type');

    if (type == 'A') {
        widthWallThickness = MM_WALL_THICKNESS * 2;
        depthWallThickness = MM_WALL_THICKNESS;
    }
    else if (type == 'B') {
        widthWallThickness = MM_WALL_THICKNESS * 2;
        depthWallThickness = 0;
    }
    else if (type == 'C') {
        widthWallThickness = MM_WALL_THICKNESS;
        depthWallThickness = MM_WALL_THICKNESS;
    }
    else if (type == 'D') {
        widthWallThickness = MM_WALL_THICKNESS;
        depthWallThickness = MM_WALL_THICKNESS;
    }
    else if (type == 'E') {
        widthWallThickness = MM_WALL_THICKNESS;
        depthWallThickness = MM_WALL_THICKNESS * 2;
    }

    rangeInnerWidthValue = parseFloat(rangeInnerWidth.value);
    rangeInnerDepthValue = parseFloat(rangeInnerDepth.value);


    if (system == 'mm') {
        innerWidthValueLabel.innerHTML = Math.round(rangeInnerWidthValue) + ' mm';
        minInnerWidthLabel.innerHTML = Math.round(rangeInnerWidth.min) + ' mm';
        maxInnerWidthLabel.innerHTML = Math.round(rangeInnerWidth.max) + ' mm';
        innerDepthValueLabel.innerHTML = Math.round(rangeInnerDepthValue) + ' mm';
        minInnerDepthLabel.innerHTML = Math.round(rangeInnerDepth.min) + ' mm';
        maxInnerDepthLabel.innerHTML = Math.round(rangeInnerDepth.max) + ' mm';

        innerWidthTableLabel.innerHTML = Math.round(rangeInnerWidthValue) + ' mm';
        innerDepthTableLabel.innerHTML = Math.round(rangeInnerDepthValue) + ' mm';

        overallWidthTableLabel.innerHTML = Math.round(rangeInnerWidthValue + widthWallThickness) + ' mm';
        overallDepthTableLabel.innerHTML = Math.round(rangeInnerDepthValue + depthWallThickness) + ' mm';
    }
    else if (system == 'in') {
        innerWidthValueLabel.innerHTML = millimetersToInches(rangeInnerWidthValue).toFixed(2) + '"';
        minInnerWidthLabel.innerHTML = millimetersToInches(rangeInnerWidth.min).toFixed(2) + '"';
        maxInnerWidthLabel.innerHTML = millimetersToInches(rangeInnerWidth.max).toFixed(2) + '"';
        innerDepthValueLabel.innerHTML = millimetersToInches(rangeInnerDepthValue).toFixed(2) + '"';
        minInnerDepthLabel.innerHTML = millimetersToInches(rangeInnerDepth.min).toFixed(2) + '"';
        maxInnerDepthLabel.innerHTML = millimetersToInches(rangeInnerDepth.max).toFixed(2) + '"';

        innerWidthTableLabel.innerHTML = millimetersToInches(rangeInnerWidthValue).toFixed(2) + '"';
        innerDepthTableLabel.innerHTML = millimetersToInches(rangeInnerDepthValue).toFixed(2) + '"';

        overallWidthTableLabel.innerHTML = millimetersToInches(rangeInnerWidthValue + widthWallThickness).toFixed(2) + '"';
        overallDepthTableLabel.innerHTML = millimetersToInches(rangeInnerDepthValue + depthWallThickness).toFixed(2) + '"';
    }

}

const observer = new MutationObserver(updateRangeInfo);

rangeInnerWidth.addEventListener('input', updateRangeInfo);
rangeInnerDepth.addEventListener('input', updateRangeInfo);

observer.observe(rangeInnerWidth, { attributes: true });
observer.observe(rangeInnerDepth, { attributes: true });