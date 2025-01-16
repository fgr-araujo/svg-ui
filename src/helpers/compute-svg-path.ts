import { reactive } from 'vue';

export type TPosition = {
  oW: number;
  oH: number;
  width: number;
  height: number;
  viewBoxWidth: number;
  ovBW: number;
  viewBoxHeight: number;
  ovBH: number;
  horizontalRatio: number;
  verticalRatio: number;
  viewBox: string,
}

export default function useComputeSVG () {
  const position: TPosition = reactive({
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

  function resized(v: TPosition) {
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
