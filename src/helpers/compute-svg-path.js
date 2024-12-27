import { reactive } from 'vue';

export default function useComputeSVG () {
  const position = reactive({
    oW: 0,
    oH: 0,
    width: 0,
    height: 0,
    viewBoxWidth: 0,
    ovBW: 0,
    viewBoxHeight: 0,
    ovBH: 0,
    horizontalRatio: 0,
    verticalRatio: 0,
    viewBox: '0 0 0 0',
  });

  function resized(v) {
    console.log('resized')
    position.width = v.width;
    position.height = v.height;
    position.oW = v.oW;
    position.oH = v.oH;
    position.viewBoxWidth = v.viewBoxWidth;
    position.ovBW = v.ovBW;
    position.viewBoxHeight = v.viewBoxHeight;
    position.ovBH = v.ovBH;
    position.viewBox = v.viewBox;
    position.horizontalRatio = v.horizontalRatio;
    position.verticalRatio = v.verticalRatio;
  }

  return { position, resized };
}
