import { type DirectiveBinding, type VNode } from 'vue'

export const ResizedDirective = {
  mounted(el: HTMLElement, binding: DirectiveBinding, vnode: VNode) {
    if (!binding.value) return;

    new ResizeObserver(
      (entries) => {
        const { width, height } = entries[0].contentRect;

        const oW = vnode.props!['original-width'];
        const oH = vnode.props!['original-height'];
        const ovBW = vnode.props!['original-viewBox-width'];
        const ovBH = vnode.props!['original-viewBox-height'];

        const viewBoxWidth = (ovBW * width) / oW;
        const viewBoxHeight = (ovBH * height) / oH;

        const horizontalRatio = viewBoxWidth - ovBW;
        const verticalRatio = viewBoxHeight - ovBH;

        const viewBox = `0 0 ${viewBoxWidth} ${viewBoxHeight}`

        binding.value({
          oW,
          oH,
          width,
          height,
          viewBox,
          ovBW,
          viewBoxWidth,
          ovBH,
          viewBoxHeight,
          horizontalRatio,
          verticalRatio });
      })
      .observe(el)
  },
}