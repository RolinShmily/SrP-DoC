---
title: 更新日志
---
# 更新日志

这里仅做每次修改时的日志，发布版本的日志请到项目[Github Release](https://github.com/RolinShmily/SrP-CFG_ForCS2/releases)中查看

## 2026-02-21
- 将准星视角从auto移至crosshair_view
- 删除auto中的HUD颜色别名
- 默认启用crosshair_view,默认关闭zeus电击枪cfg
- 添加新cfg:autoview;实现自适应武器视角切换，按`[`启用
- 为autoexec添加别名`back`;为zeus添加别名`zeus`以便于快速启用。
- 内容格式修修补补

## 2026-02-12
- 修复aying视角预设

## 2026-02-04
- 将默认雷达缩放与换手按键互换

## 2026-01-13
- 更新犬升视角和准星

## 2026-01-12
- 发布安装器GUI版本

## 2026-01-06
### cs2_video.txt
- 更新视频设置文件

## 2026-01-01
### autoexec
- 将雷达透明度、雷达是否与背景融合、雷达背景是否模糊代码写入
- 设置雷达透明0.63，开启与背景融合，开启雷达模糊
### demo_hlae
- 同步autoexec雷达相关设置
- 设置demo雷达默认为透明雷达

## 2025-12-30
### demo_hlae
- 默认屏蔽下方小字按键提示，可以输入`show`开启，`noshow`关闭
- 默认屏蔽投掷物轨迹预测小窗，防止demo录制时的奇异；输入`grenadeoff`关闭，`grenadeon`开启
### practice
- 默认关闭投掷物落点预测小窗，可通过快捷键`⬅`开关
- `sv_grenade_trajectory_prac_trailtime`投掷物预测时间无法正常启用；指令返回值正确，但无法修改也无法生效；初步原因预测为指令冲突。
- 问题已解决：`spec_show_xray 1`开启X光即可
- 默认开启X光，添加`xray`别名开关投掷物轨迹
- 默认关闭弹着痕显示，通过快捷键`⬆`开关
- 添加BOT默认静止

## 2025-12-14
- 代码注释结构整体优化
- 解决各项控制台导航显示bug
### demo_hlae
- 删除帮助信息显示功能

## 2025-11-24

### demo_hlae
- 添加HLAE默认录制位置的注释，并选择默认不开启自定义路径

### crosshair_view
- 新添查询准星代码，可用于分享或导入

## 2025-11-22

### Installer安装器
- 用于用户自动安装CFG预设，只需将下载好的`zip`包拖入程序即可完成安装，无须自行寻找`CFG文件夹路径`。

发布版本`v1.1.1`

## 2025-11-20

### demo_hlae

- HLAE录制demo位置修改为`F:\SteamLibrary\steamapps\common\Counter-Strike Global Offensive\game\csgo\replays`
- demo模式CFG下使用大准星和标准持枪视角，避免自己的游戏设置覆盖。

## 2025-11-17

- 全部导航栏与部分代码添加大字符画与文档链接
- 为准星视角 CFG 添加一键轮换与查询功能
- 标识出自定义准星替换区
- 优化边边角角,发布 v1.1.0

## 2025-11-09

### autoexec

- 修改默认灵敏度为`0.5625`；在 1600DPI 时，EDPI 为 1000；
- 标识出自定义准星替换区

```
sensitivity 0.5625                 // 灵敏度
//──────────────────────  自定义准星替换区  ─────────────────────────────
cl_crosshair_drawoutline "false"                     // 禁用准星轮廓绘制
cl_crosshair_dynamic_maxdist_splitratio "0.300000"   // 动态准星最大分离距离的比例
cl_crosshair_dynamic_splitalpha_innermod "1.000000"  // 动态准星内部分离部分的透明度
cl_crosshair_dynamic_splitalpha_outermod "0.500000"  // 动态准星外部分离部分的透明度
cl_crosshair_dynamic_splitdist "7"                   // 动态准星分离距离
cl_crosshair_outlinethickness "1.000000"             // 准星轮廓的厚度（如果启用轮廓）
cl_crosshair_recoil "false"                          // 禁用准星随武器后坐力动态变化
cl_crosshair_t "false"                               // 禁用T形准星
cl_crosshairalpha "255"                              // 准星的透明度（255为完全不透明）
cl_crosshaircolor "5"                                // 准星颜色（5为自定义颜色）
cl_crosshaircolor_b "255"                            // 准星颜色的蓝色分量（RGB）
cl_crosshaircolor_g "255"                            // 准星颜色的绿色分量（RGB）
cl_crosshaircolor_r "255"                            // 准星颜色的红色分量（RGB）
cl_crosshairdot "false"                              // 禁用准星中心点
cl_crosshairgap "-3.400000"                          // 准星间隙大小（负值表示准星向内收缩）
cl_crosshairgap_useweaponvalue "false"               // 禁用根据武器调整准星间隙
cl_crosshairsize "0.900000"                          // 准星大小
cl_crosshairstyle "4"                                // 准星样式（4为经典静态准星）
cl_crosshairthickness "0.800000"                     // 准星线条的厚度
cl_crosshairusealpha "true"                          // 启用准星透明度设置
//───────────────────────────────────────────────────────────────────────────
```

## 2025-11-08

### autoexec

- 添加 HUD 颜色更改命令
- 添加装备常显切换命令

```
alias "lwhite" "cl_hud_color 1;echo HUD更改为灰白色!"
alias "bwhite" "cl_hud_color 2;echo HUD更改为亮白色!"
alias "lblue" "cl_hud_color 3;echo HUD更改为浅蓝色!"
alias "blue" "cl_hud_color 4;echo HUD更改为深蓝色!"
alias "purple" "cl_hud_color 5;ehco HUD更改为紫色!"
alias "red" "cl_hud_color 6;echo HUD更改为红色!"
alias "orange" "cl_hud_color 7;echo HUD更改为橙色!"
alias "yellow" "cl_hud_color 8;echo HUD更改为黄色!"
alias "green" "cl_hud_color 9;echo HUD更改为绿色!"
alias "cyan" "cl_hud_color 10;echo HUD更改为青绿色!"
alias "pink" "cl_hud_color 11;echo HUD更改为粉色!"

alias "show" "cl_showloadout 1;echo 常显装备栏!"
alias "notshow" "cl_showloadout 0;echo 取消常显装备栏!"
```

## 2025-10-30

### autoexec

- 添加游戏延迟总结、详情展示功能

```
alias "ps" "cl_ticktiming print summary;echo 显示服务器tick信息!"
alias "pd" "cl_ticktiming print detail;echo 显示服务器tick详细信息!"
```

## 2025-10-25

### practice

- 添加死亡不掉落

```
mp_death_drop_gun 1                    //死亡后掉落枪械（避免无法丢弃装备）
mp_death_drop_grenade 0                //死亡后不掉落投掷物
mp_death_drop_defuser 0                //死亡不掉钳子
```

> 为优化性能，在 bot 模式下无法丢弃武器，相应的 bot 也无法掉落装备。

- 默认为可掉落装备
- 添加 bot 命令添加`mp_death_drop_gun 0`
- 删除 bot 命令添加`mp_death_drop_gun 1`
- 重新开始游戏添加`mp_death_drop_gun 1`

## 2025-10-17

### autoexec for yszh

- 默认显示对局头像

```
cl_teamcounter_playercount_instead_of_avatars 0 // 显示上层对局存活数字(1)或者头像(0)
```
