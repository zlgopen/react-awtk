# LCD 密度与图片的对应关系

- x1 目录下放普通 LCD 的图片。
- x2 目录下放高清 LCD 的图片。
- x3/x4 目录下放手机等超高清 LCD 的图片。
- xx 目录下放屏幕无关的图片，如背景图片等等。
- svg 目录下放 SVG 图片，SVG 适合需要旋转和缩放的情况。

> 如果一个图标在 x1 里的大小是 24x24，在 x2 下应该为 48x48，在 x3 下应该为 72x72。

注意：

- 一般来说图标都应该提供 x1/x2/x3 的三种大小。实际操作时，由美术提供 x3 的图片，程序员用工具（如：bin/image_resize) 批量生成 x2 和 x1 的图标。

- 对于嵌入式系统，一般只需要 x1 的图片。如果开发环境使用高清的 PC 显示器，为了方便 PC 上看效果，建议也准备一套 x2 的图片。

- 只有定义了 WITH_FS_RES 宏，也就是有文件系统时，AWTK 根据 LCD 密度自动取对应的图片。

- 如果没有文件系统，可以在资源生成脚本 update_res.py 中指定使用 x1/x2/x3 的哪种图片。