# 使用指南

|                             功能                              |         文件         |
| :-----------------------------------------------------------: | :------------------: |
|                        自启动基础设置                         |    `autoexec.cfg`    |
|                        准星与持枪视角                         | `crosshair_view.cfg` |
|                        个人自建房跑图                         |    `practice.cfg`    |
| 使用[HLAE](https://github.com/advancedfx/advancedfx)观看 demo |   `demo_hlae.cfg`    |
|                         匕首模型切换                          |     `knife.cfg`      |
|                        电击枪快速切换                         |      `zeus.cfg`      |
|                           视频设置                            |   `cs2_video.txt`    |

> 以下的 CFG 详细功能表，所有的 CFG 在运行后都会在控制台输出导航信息，请注意查看。

## autoexec.cfg

- `zeus.cfg`默认启动，它重定义了`1`、`2`、`3`、`4`、`5`、`q` 键的功能。

|          功能           |    快捷键     |      控制台别名       |
| :---------------------: | :-----------: | :-------------------: |
|          前进           |      `W`      |           -           |
|          后退           |      `S`      |           -           |
|          向左           |      `A`      |           -           |
|          向右           |      `D`      |           -           |
|        普通攻击         |   鼠标左键    |           -           |
|        特殊攻击         |   鼠标右键    |           -           |
|          使用           |      `E`      |           -           |
|        装填弹药         |      `R`      |           -           |
|          检视           |      `F`      |           -           |
|          跳跃           | 空格/滚轮上下 |           -           |
|          蹲下           |    `Ctrl`     |           -           |
|       显示计分板        |     `TAB`     |           -           |
|        丢弃物品         |      `G`      |           -           |
|        选择队伍         |      `M`      |           -           |
|          静步           |    `Shift`    |           -           |
|        购买菜单         |      `B`      |           -           |
|         主武器          |      `1`      |           -           |
|         副武器          |      `2`      |           -           |
|          匕首           |      `3`      |           -           |
|         电击枪          |      `4`      |           -           |
|           C4            |      `5`      |           -           |
|           雷            |      `Z`      |           -           |
|           火            |      `V`      |           -           |
|           闪            |      `X`      |           -           |
|           烟            |      `C`      |           -           |
|         诱饵弹          |      `6`      |           -           |
|     切换为最近武器      |      `Q`      |           -           |
|          喷漆           |      `Y`      |           -           |
|        团队聊天         |      `U`      |           -           |
|        全体聊天         |      `I`      |           -           |
|          语音           |   `后侧键`    |           -           |
|      快捷聊天轮盘       |     `Alt`     |           -           |
|          标点           |   `前侧键`    |           -           |
|         控制台          |    `` ` ``    |           -           |
|       切换左右手        |      `T`      |           -           |
|        雷达缩放         |      `H`      |           -           |
|      队友头顶标识       |      `N`      |           -           |
|   无线电菜单、医疗针    |      `‘`      |           -           |
|  仅显示准星与击杀信息   |      `-`      |           -           |
|      显示/关闭雷达      |      `=`      |           -           |
|        投票同意         |     `F1`      |           -           |
|        投票拒绝         |     `F2`      |           -           |
|    购买手枪第五槽位     |     `F3`      |           -           |
|    购买步枪第二槽位     |     `F4`      |           -           |
|        购买手雷         |     `F5`      |           -           |
|        购买闪光         |     `F6`      |           -           |
|        购买烟雾         |     `F7`      |           -           |
|       购买燃烧弹        |     `F8`      |           -           |
|        购买半甲         |     `F9`      |           -           |
|        购买全甲         |     `F10`     |           -           |
|        购买钳子         |     `F11`     |           -           |
|      出售所有装备       |    退格键     |           -           |
|       总音量 30%        |   `Delete`    |           -           |
|      重启 autoexec      |      `O`      |    `exec autoexec`    |
|      匕首模型更换       |      `J`      |     `exec knife`      |
|        跑图训练         |      `P`      |    `exec practice`    |
|   准星、持枪视角预设    |      `[`      | `exec crosshair_view` |
|        demo 预设        |      `]`      |   `exec demo_hlae`    |
|        平台发刀         |      `K`      |      `say !drop`      |
|      5E 平台报伤害      |      `\`      |       `say .hp`       |
|      默认左手持枪       |       -       |      `lefthand`       |
| 关闭狙击开枪后自动开镜  |       -       |      `debounce`       |
|     禁用卸下消音器      |       -       |      `silencer`       |
|      显示对局头像       |       -       |       `avatars`       |
|      显示对局人数       |       -       |       `numbers`       |
|       关闭曳光弹        |       -       |       `tracer`        |
|    启用快捷轮盘标点     |       -       |        `ping`         |
|     强制方形小地图      |       -       |      `squareon`       |
|     POV 圆形小地图      |       -       |      `squareoff`      |
|    计分板圆形小地图     |       -       |        `round`        |
|     开启狙击镜扩散      |       -       |      `sniperon`       |
|     关闭狙击镜扩散      |       -       |      `sniperoff`      |
| n 为飞行，ralt 标识切换 |       -       |        `flyn`         |
| ralt 为飞行，n 标识切换 |       -       |       `flyralt`       |
|       默认飞行键        |    `ralt`     |           -           |
|   控制台打印游戏延迟    |       -       |         `ps`          |
|  打印游戏延迟详细信息   |       -       |         `pd`          |
|     开启常显装备栏      |       -       |        `show`         |
|     关闭常显装备栏      |       -       |       `notshow`       |
|      更改 HUD 颜色      |       -       |          ...          |
|         灰白色          |       -       |       `lwhite`        |
|         亮白色          |       -       |       `bwhite`        |
|         浅蓝色          |       -       |        `lblue`        |
|          蓝色           |       -       |        `blue`         |
|          紫色           |       -       |       `purple`        |
|          红色           |       -       |         `red`         |
|          橙色           |       -       |       `orange`        |
|          黄色           |       -       |       `yellow`        |
|          绿色           |       -       |        `green`        |
|         青绿色          |       -       |        `cyan`         |
|          粉色           |       -       |        `pink`         |

控制台导航信息:

```cfg
echo ═════════════════════════════════════════════════════════════
echo ──────────────────────  更新报告  ─────────────────────────────
echo 2025.08.15更新后F1、F2默认绑定为投票，需要取消自定义绑定
echo ──────────────────────  HUD颜色更换  ─────────────────────────────
echo ·输入 lwhite → 灰白色 | cl_hud_color 1;
echo ·输入 bwhite → 亮白色   | cl_hud_color 2;
echo ·输入 lblue →  浅蓝色   | cl_hud_color 3;
echo ·输入 blue  →  蓝色   | cl_hud_color 4;
echo ·输入 purple → 紫色   | cl_hud_color 5;
echo ·输入 red   →  红色   | cl_hud_color 6;
echo ·输入 orange → 橙色   | cl_hud_color 7;
echo ·输入 yellow → 黄色   | cl_hud_color 8;
echo ·输入 green →  绿色   | cl_hud_color 9;
echo ·输入 cyan  →  青绿色   | cl_hud_color 10;
echo ·输入 pink  →  粉色   | cl_hud_color 11;
echo ──────────────────────  常用指令  ─────────────────────────────
echo ·输入 lefthand → 切换默认左手持枪 | cl_prefer_lefthanded 1;
echo ·输入 debounce → 关闭连镜切换         | cl_debounce_zoom 1;
echo ·输入 silencer → 禁用卸下消音器   | cl_silencer_mode 0;
echo ·输入 avatars → 显示对局头像      | cl_teamcounter_playercount_instead_of_avatars 0;
echo ·输入 numbers → 显示对局数字      | cl_teamcounter_playercount_instead_of_avatars 1;
echo ·输入 tracer → 关闭曳光弹         | r_drawtracers_firstperson 0;
echo ·输入 ping → 开启快捷轮盘标点     | cl_radial_radio_tap_to_ping true;
echo ·输入 squareon → 强制方形小地图     | cl_radar_square_always 1;
echo ·输入 squareoff → 取消强制方形小地图  | cl_radar_square_always 0;
echo ·输入 round → 计分板地图为圆形    | cl_radar_square_with_scoreboard 0;
echo ·输入 clear → 清除控制台           | clear;
echo ·输入 cvarlist → 显示所有控制台指令    | cvarlist;
echo ·输入 status → 显示steamID         | status;
echo ·输入 sniperon → 显示狙击镜扩散     | cl_sniper_show_inaccuracy 1;
echo ·输入 sniperoff → 关闭狙击镜扩散     | cl_sniper_show_inaccuracy 0;
echo ·输入 flyn → 开启n键飞行           | bind "n" "noclip";
echo ·输入 flyralt → 开启ralt键飞行      | bind "ralt" "noclip";
echo ·输入 ps → 显示当前游戏延迟总结      | cl_ticktiming print summary;
echo ·输入 pd → 显示当前游戏延迟详情      | cl_ticktiming print detail;
echo ·输入 show → 常显装备栏    			| cl_showloadout 1；
echo ·输入 notshow → 取消常显装备栏      | cl_showloadout 0；
echo ────快捷轮盘当前激活标签页：0（切换1/2页）  | cl_radial_radio_tab 0;
echo ───────────────────────  快捷键  ─────────────────────────────
echo ──── 重启autoexec  		    : O键 | exec autoexec
echo ──── 跑图,练习道具  			:  P键 | exec practice
echo ──── 更换匕首模型 			    :  J键 | exec knife
echo ──── demo观赛预设(含HLAE) 	     :  ]键 | exec demo_hlae
echo ──── 一键发刀(平台) 	        :  K键 | say_team !drop
echo ──── 一键伤害提示(5E平台)	    :  \键 | say_team .hp
echo ──── 准星与持枪视角预设         :  [键 | exec crosshair_view
echo ──── 切换雷达缩放比例           :  h键 | toggleradarscale
echo ──── 切换是否仅显示死亡通知与准星:  -键 | toggle cl_draw_only_deathnotices 1 0
echo ──── 切换是否强制显示雷达       :  =键 | toggle cl_drawhud_force_radar 1 0
echo ──── 快捷聊天轮盘              : alt键 | +radialradio
echo ──── 默认飞行键                : ralt键 | noclip
echo ──── 一键消音至30%  		    : delete键 | toggle volume 0.10 1.00
echo ──── 购买雷、闪、烟、火、半甲、全甲、钳 : F5|F6|F7|F8|F9|F9|F10|F11
echo ──── 出售所有已购买物品 		 : backspace键 | sellbackall
echo ──── 以下功能，在跑图模式下，产生按键冲突，后启动的模式按键优先：
echo ──── 切换队友头顶标识模式       : n键 toggle cl_teamid_overhead_mode 1 3
echo ═════════════════════════════════════════════════════════════
```

## practice.cfg

> 出生点预设参考于 [Bad0RANG3](https://github.com/Bad0RANG3/CS2PraticeCFG)

- 默认状态下`P`键启用

|          功能          |      快捷键       | 控制台别名 |
| :--------------------: | :---------------: | :--------: |
|    切换队友头顶显示    | `ralt`(右 alt 键) |     -      |
|         弹着点         |        `↑`        |     -      |
|        杀死 Bot        |        `↓`        |     -      |
|    实时预测道具轨迹    |        `←`        |     -      |
|        重新开始        |        `→`        |     -      |
|        补全护甲        |       `F1`        |     -      |
|        自动回血        |       `F2`        |     -      |
|      取消摔落伤害      |       `F3`        |     -      |
|        添加 Bot        |       `F4`        |     -      |
|      使 Bot 蹲下       |       `F5`        |     -      |
|  使机器人模仿你的操作  |       `F6`        |     -      |
|       视角放大镜       |       `F7`        |     -      |
|        删除 Bot        |       `F8`        |     -      |
|       Bhop 连跳        |       `F12`       |     -      |
|    重现最近一次道具    |        `L`        |     -      |
|      加速时间流逝      |        `0`        |     -      |
|        放置 Bot        |  `MOUSE4`后侧键   |     -      |
|        飞行模式        |        `N`        |     -      |
|     显示速度信息等     |        `K`        |     -      |
|      标准实战模拟      |         -         |   `gkd`    |
|      恢复跑图模式      |         -         |    `gg`    |
|     加载出生点预设     |         -         |  `spawn`   |
| 实体显示(高环境光遮蔽) |        `.`        |     -      |
|       任意处安包       |         -         |  `plant`   |
|      弹夹容量状态      |        `/`        |     -      |
|        友伤状态        |       `F9`        |     -      |

控制台导航信息：

```cfg
echo ──────────────────────  常用指令  ─────────────────────────────
echo ──── 雷达显示所有人		:  mp_radar_showall 1;
echo ──── 调整护甲(2=全甲)		:  mp_free_armor 1;
echo ──── 无敌(个人)		:  god;
echo ───────────────────────  快捷键  ─────────────────────────────
echo ──── 切换队友头顶标识模式 		:  ralt
echo ──── 弹着点                   :  ↑
echo ──── BOT蹲下   		       :  F5
echo ──── 杀死BOT   		      :  ↓
echo ──── 切换Bhop开和关		  :  F12
echo ──── 重现最近一次投掷物  	   :  L
echo ──── 切换实时预测轨迹		  :  ←
echo ──── 加速时间，松开恢复  	   :  0
echo ──── 添加BOT  		          :  F4
echo ──── 删除BOT  		          :  F8
echo ──── 放置BOT  		         :  mouse4
echo ──── 重新开始 		          :  →
echo ──── 飞行      		     :  N
echo ──── 显示速度信息	         :  K
echo ──── 机器人模仿动作	      :  F6
echo ──── 视野放大功能	          :  F7
echo ──── 补甲补道具	         :  F1
echo ──── 自动回血功能	         :  F2
echo ──── 摔落伤害	             :  F3
echo ──── 弹夹容量状态切换	      :  /
echo ──── 切换实体显示(需开高环境光遮蔽)  :  .
echo ──── 是否开启友伤  	      :  F9
echo ───────────────────────  控制台别名指令  ─────────────────────────────
echo ·输入 plant → 任意处安包
echo ═════════════════════════════════════════════════════════════
echo ·输入 gkd → 标准实战模拟 | 输入 gg -> 恢复跑图模式
echo ·输入 spawn 加载出生点传送预设

```

## spawn.cfg

- 只在跑图模式下(运行`practice.cfg`后)，控制台输入`spawn`启用
- 请先在控制台选择地图，再输入出生点别名。

|    地图    | 控制台别名 |
| :--------: | :--------: |
|  炼狱小镇  | `inferno`  |
|   沙漠 2   |  `dust2`   |
|  荒漠迷城  |  `mirage`  |
|  远古遗迹  | `ancient`  |
|  核子危机  |   `nuke`   |
|  殒命大厦  | `vertigo`  |
|  阿努比斯  |  `anubis`  |
|   办公室   |  `office`  |
|   意大利   |  `italy`   |
| 列车停放站 |  `train`   |
| 死亡游乐园 | `overpass` |

|     出生位      | 控制台别名 |
| :-------------: | :--------: |
| 警察 1 号出生点 |   `CT1`    |
| 警察 2 号出生点 |   `CT2`    |
| 匪徒 3 号出生点 |    `T3`    |
| 匪徒 4 号出生点 |    `T4`    |
|       ...       |    ...     |

出生点地图预设文件:

- `vertigo.cfg`
- `office.cfg`
- `nuke.cfg`
- `mirage.cfg`
- `italy.cfg`
- `inferno.cfg`
- `dust2.cfg`
- `anubis.cfg`
- `ancient.cfg`
- `train.cfg`
- `overpass.cfg`

初始化文件：

- `init_spawns.cfg`

## demo_hlae.cfg

> 参考自[Purp1e](https://github.com/Purple-CSGO/CSGO-Config-Presets)，整合了[动态模糊录制功能(来自 YouTube)](https://www.youtube.com/watch?v=4zq27TcpfVg)

- 默认状态下`]`键启用

- 完整功能需要安装[HLAE](https://github.com/advancedfx/advancedfx)和正确配置[FFmpeg](https://ffmpeg.org/)，在 CFG 中也有指示。

|            功能            |         快捷键         |      控制台别名      |
| :------------------------: | :--------------------: | :------------------: |
|        demoUI 开关         |    `Q` / `shift+F2`    |       `demoui`       |
|     标记当前时间 tick      |          `Y`           |          -           |
|     跳转标记时间 tick      |          `U`           |          -           |
|   镜头摆放模式(ESC 退出)   |          `T`           |          -           |
|          添加镜头          |       `Capslock`       |          -           |
|          清空镜头          |        `Delete`        |          -           |
|          镜头激活          |          `I`           |          -           |
|          镜头轨迹          |          `O`           |          -           |
|         demo 暂停          | `P`/ `MOUSE3` 鼠标中键 |          -           |
|      只保留准星和击杀      |          `H`           |          -           |
|   只显示当前玩家击杀信息   |          `J`           |          -           |
|       开关 CSGO 语音       |          `K`           |          -           |
|       开关 CS2 语音        |          `'`           |          -           |
| 查看当前玩家信息和语音屏蔽 |          `L`           |          -           |
|        队友头顶标识        |         `ralt`         |          -           |
|          X 光透视          |          `X`           |          -           |
|            准星            |          `V`           |          -           |
|          hud 开关          |          `B`           |          -           |
|            雷达            |          `N`           |          -           |
|            静音            |          `M`           |          -           |
|          快退 5s           |          `,`           |          -           |
|          快进 5s           |          `.`           |          -           |
|         +播放速度          |     `MOUSE5`前侧键     |          -           |
|         - 播放速度         |     `MOUSE4`后侧键     |          -           |
|       运镜回退 0.25s       |          `[`           |          -           |
|       运镜快进 0.25s       |          `]`           |          -           |
|      切换击杀信息显示      |          `\`           |        `ass`         |
|          广角 POV          |          `=`           |          -           |
|       开启 HLAE 录制       |          `↑`           |          -           |
|       关闭 HLAE 录制       |          `↓`           |          -           |
|   设置当前 tick 开始录制   |          `F5`          |          -           |
|   设置当前 tick 结束录制   |          `F6`          |          -           |
|     打印 mirv_cmd 信息     |          `F7`          |          -           |
|     清除 mirv_cmd 指令     |          `F8`          |          -           |
|  开关 VGUI(Reshade 功能)   |          `F9`          |          -           |
|      开启动态模糊录制      |           -            |       `bluron`       |
|      关闭动态模糊录制      |           -            |      `bluroff`       |
|  关闭 BGM、MVP、无线电等   |           -            |        `mute`        |
|      解绑运镜模式按键      |           -            |         `t`          |
|       回合开始无灰色       |           -            |        `post`        |
|    使运镜开始为当前视角    |           -            |        `pos`         |
|   使运镜开始为当前 tick    |           -            |        `time`        |
|    运镜模式的 FOV 修改     |           -            | `f10、f15、... f100` |
|        显示对局头像        |           -            |      `avatars`       |
|        显示对局人数        |           -            |      `numbers`       |
|   显示 demo 下方小字提示   |           -            |        `show`        |
|   屏蔽 demo 下方小字提示   |           -            |       `noshow`       |

控制台导航信息：

```cfg
echo ═════════════════════════════════════════════════════════════════════
echo ──────────────────────!!!重要提示!!!──────────────────────────
echo 正如文件名所示，你需要通过HLAE启动游戏，并正确配置FFmpeg，否则，部分功能将无法使用。
echo ────────────────────────  控制台指令  ────────────────────────────
echo ──── 开启/关闭 动态模糊录制	:  bluron | bluroff
echo ──── 关闭BGM/MVP/无线电声音	:  mute
echo ──── 解绑运镜模式键位冲突	:  t
echo ──── 切换助攻显示		:  ass
echo ──── 切换后处理滤镜 [开局灰色]	:  post
echo ──── 修改运镜起始位置为当前点	:  pos
echo ──── 修改运镜起始时间为当前Tick	:  time
echo ──── 运镜模式下修改FOV		:  f10 | f15 | ... | f100
echo ──── 显示对局头像/数字		:  avatars | numbers
echo ──── 是否显示下方小字提示		:  show | noshow
echo ────────────────────────  快捷键  ───────────────────────────────
echo ──── 打开/关闭demoui        	:  Q
echo ──── 镜头摆放模式 [ESC]退出   	:  T
echo ──── 标记当前Tick           	:  Y
echo ──── 跳转标记             	:  U
echo ──── 镜头激活开关        	:  I
echo ──── 镜头轨迹显示    		:  O
echo ──── demo暂停/继续          	:  P 或 鼠标中键（mouse3）
echo ─────────────────────────────────────────────────────────────
echo ──── HUD只保留准星和击杀    	:  H
echo ──── 独显击杀信息 @当前观察玩家	:  J  关闭时清空所有信息
echo ──── 开关CSGO语音      		:  K
echo ──── 查看玩家信息和语音屏蔽提示	:  L  用户id/xuid/观察按键
echo ──── 开关CS2玩家语音 		:  '
echo ──── 切换队友头顶标识模式 		:  ralt
echo ─────────────────────────────────────────────────────────────
echo ──── x光       	   	:  X
echo ──── 准心开关      		:  V
echo ──── 开关HUD      		:  B
echo ──── 开关雷达      		:  N
echo ──── 静音           	 	:  M
echo ──── 快退5s      		:  ,
echo ──── 快进5s       		:  .
echo ──── 运镜时间回退0.25s    	:  [
echo ──── 运镜时间快进0.25s    	:  ]
echo ──── 切换击杀信息显示   	:  \
echo ──── 切换广角FOV       	:  =
echo ─────────────────────────────────────────────────────────────
echo ──── 打开/关闭demoui		:  Shift+F2
echo ──── 添加镜头      		:  Capslock
echo ──── 清空镜头      		:  Delete
echo ──── +播放速度      		:  前侧键（mouse5）
echo ──── -播放速度      		:  后侧键（mouse4）
echo ─────────────────────────────────────────────────────────────
echo ──── 开始HLAE录制  		:  ↑
echo ──── 结束HLAE录制  		:  ↓
echo ──── 设置当前Tick开始录制    	:  F5
echo ──── 设置当前Tick结束录制    	:  F6
echo ──── 打印mirv_cmd信息        	:  F7
echo ──── 清除所有mirv_cmd指令    	:  F8
echo ──── 开关VGUI 用于Reshade    	:  F9
echo ═════════════════════════════════════════════════════════════
```

## knife.cfg

> V 社在 2025 年 8 月 15 日更新过后，原来的命令不再适用，新的操作已在 CFG 中写明。

- 默认状态下`j`键启用

|  刀具模型  | 控制台别名 |
| :--------: | :--------: |
|    刺刀    |   `500`    |
|  海豹短刀  |   `503`    |
|   折叠刀   |   `505`    |
|   穿肠刀   |   `506`    |
|   爪子刀   |   `507`    |
|  M9 刺刀   |   `508`    |
| 猎杀者匕首 |   `509`    |
|    弯刀    |   `512`    |
|  鲍伊猎刀  |   `514`    |
|   蝴蝶刀   |   `515`    |
|  暗影双匕  |   `516`    |
|  系绳匕首  |   `517`    |
|  求生匕首  |   `518`    |
|    熊刀    |   `519`    |
|    折刀    |   `520`    |
| 流浪者匕首 |   `521`    |
|    短剑    |   `522`    |
|  锯齿爪刀  |   `523`    |
|  默认匕首  |   `524`    |
|  骷髅匕首  |   `525`    |
|   尼泊尔   |   `526`    |

控制台导航信息：

```cfg
echo ═════════════════════════════════════════════════════════════
echo ──────────────────────!!!重要提示!!!──────────────────────────
echo Valve将匕首模型与动作分开后,指令也做出了修改,现在将在准星对准处生成模型。
echo ──────────────────────  匕首模型库  ──────────────────────────
echo ·输入 500 -> 更改匕首为 刺刀 | 刺刀 500
echo ·输入 503 -> 更改匕首为 海豹短刀 | 海豹短刀 503
echo ·输入 505 -> 更改匕首为 折叠刀 | 折叠刀 505
echo ·输入 506 -> 更改匕首为 穿肠刀 | 穿肠刀 506
echo ·输入 507 -> 更改匕首为 爪子刀 | 爪子刀 507
echo ·输入 508 -> 更改匕首为 M9刺刀 | M9刺刀 508
echo ·输入 509 -> 更改匕首为 猎杀者匕首 | 猎杀者匕首 509
echo ·输入 512 -> 更改匕首为 弯刀 | 弯刀 512
echo ·输入 514 -> 更改匕首为 鲍伊猎刀 | 鲍伊猎刀 514
echo ·输入 515 -> 更改匕首为 蝴蝶刀 | 蝴蝶刀 515
echo ·输入 516 -> 更改匕首为 暗影双匕 | 暗影双匕 516
echo ·输入 517 -> 更改匕首为 系绳匕首 | 系绳匕首 517
echo ·输入 518 -> 更改匕首为 求生匕首 | 求生匕首 518
echo ·输入 519 -> 更改匕首为 熊刀 | 熊刀 519
echo ·输入 520 -> 更改匕首为 折刀 | 折刀 520
echo ·输入 521 -> 更改匕首为 流浪者匕首 | 流浪者匕首 521
echo ·输入 522 -> 更改匕首为 短剑 | 短剑 522
echo ·输入 523 -> 更改匕首为 锯齿爪刀 | 锯齿爪刀 523
echo ·输入 524 -> 更改匕首为 默认匕首 | 默认匕首 524
echo ·输入 525 -> 更改匕首为 骷髅匕首 | 骷髅匕首 525
echo ·输入 526 -> 更改匕首为 尼泊尔 | 尼泊尔 526
echo ═════════════════════════════════════════════════════════════
```

## zeus.cfg

- 在 `autoexec.cfg` 中自动启用，必须绑定“4”键电击枪
- 功能：在电击枪左键使用之后自动切出主武器/副武器，手持电击枪右键时则不使用，直接切出主武器/副武器。
- Tips: 电击枪充电完成是有声音的，请注意使用后利用该声音做一定战术调整，或者直接将其丢弃，避免在关键时刻暴露位置。

控制台导航信息：

```cfg
echo ═════════════════════════════════════════════════════════════
echo ──────────────────────  敬请注意  ────────────────────────────
echo 此cfg需要确认1、2、3、4、5、q键为默认功能按键，否则无法使用
echo 1为主武器，2为副武器，3为匕首，4为电击枪，5为C4，q为切换为最近武器
echo 是的，你需要习惯使用4键来切换为电击枪，否则请禁用此cfg
echo ──────────────────────  功能说明  ────────────────────────────
echo 简单来说就是让你在使用电击枪后自动切换为正常枪械，在持有电击枪时右键也可以切换正常枪械。
echo ═════════════════════════════════════════════════════════════
```

## crosshair_view.cfg

> 由于 Valve 的脚本指令单条有长度限制，而准星参数的设置已经超过该限制，故直接用 cfg 文件来保存准星预设，这也就要求若更换准星，则必须搭配 `crosshair_library` 准星代码库使用

- 默认状态下 `[` 键启用
- 准星与持枪视角的存储与即时更换

|           功能           | 快捷键 | 控制台别名 |
| :----------------------: | :----: | :--------: |
|      开关 T 型准星       |  `←`   |     -      |
|      开关准星中心点      |  `→`   |     -      |
|      关闭投掷物准星      |  `↑`   | `nothrow`  |
|      开启投掷物准星      |  `↓`   |  `throw`   |
|    更改准星颜色为...     |  ...   |    ...     |
|           红色           |   -    |   `red`    |
|           橙色           |   -    |  `orange`  |
|           黄色           |   -    |  `yellow`  |
|           绿色           |   -    |  `green`   |
|           青色           |   -    |   `cyan`   |
|           蓝色           |   -    |   `blue`   |
|           紫色           |   -    |  `purple`  |
|           黑色           |   -    |  `black`   |
|           白色           |   -    |  `white`   |
|           粉色           |   -    |   `pink`   |
|           棕色           |   -    |  `brown`   |
|           灰色           |   -    |   `gray`   |
| 投掷时保持玩家自定义准星 |   -    |   `keep`   |
| 输入...切换准星/持枪视角 |  ...   |    ...     |
|         0 号准星         |   -    |   `c00`    |
|         1 号准星         |   -    |   `c01`    |
|         2 号准星         |   -    |   `c02`    |
|         3 号准星         |   -    |   `c03`    |
|         4 号准星         |   -    |   `c04`    |
|         5 号准星         |   -    |   `c05`    |
|         6 号准星         |   -    |   `c06`    |
|         0 号视角         |   -    |   `v00`    |
|         1 号视角         |   -    |   `v01`    |
|         2 号视角         |   -    |   `v02`    |
|         3 号视角         |   -    |   `v03`    |
|         4 号视角         |   -    |   `v04`    |
|         5 号视角         |   -    |   `v05`    |
|         6 号视角         |   -    |   `v06`    |

`crosshair_library`代码库中的准星预设文件：

- 01.cfg
- - 准星代码: `CSGO-H9mcs-8GDFZ-MfxkQ-2Kx7O-pTLoD`
- 02.cfg
- - 准星代码: `CSGO-oK2db-LY2wT-seq73-YTnJB-3bOUD`
- 03.cfg
- - 准星代码: `CSGO-9StUb-FrcBs-HhYjr-mzVip-YScNE`
- 04.cfg
- - 准星代码: `CSGO-pqEaF-5AKXB-DCdnh-vpxAJ-94GSQ`
- 05.cfg
- - 准星代码: `CSGO-Q4APO-buiyc-i9V7H-7sxJN-Zy8rN`
- 06.cfg
- - 准星代码: `CSGO-LpB26-mhWAt-srQVK-fEE34-BWxTC`

控制台导航信息：

```cfg
echo ═════════════════════════════════════════════════════════════
echo ──────────────────────  指令与快捷键  ─────────────────────────────
echo ·输入 red -> 更改准星颜色为红色(Red)       | RGB: 255/0/0
echo ·输入 orange -> 更改准星颜色为橙色(Orange) | RGB: 255/165/0
echo ·输入 yellow -> 更改准星颜色为黄色(Yellow) | RGB: 255/255/0
echo ·输入 green -> 更改准星颜色为绿色(Green)   | RGB: 0/255/0
echo ·输入 cyan -> 更改准星颜色为青色(Cyan)     | RGB: 0/255/255
echo ·输入 blue -> 更改准星颜色为蓝色(Blue)     | RGB: 0/0/255
echo ·输入 purple -> 更改准星颜色为紫色(Purple) | RGB: 128/0/128
echo ·输入 black -> 更改准星颜色为黑色(Black)   | RGB: 0/0/0
echo ·输入 white -> 更改准星颜色为白色(White)   | RGB: 255/255/255
echo ·输入 pink -> 更改准星颜色为粉色(Pink)     | RGB: 255/192/203
echo ·输入 brown -> 更改准星颜色为棕色(Brown)   | RGB: 165/42/42
echo ·输入 gray -> 更改准星颜色为灰色(Gray)     | RGB: 128/128/128
echo ·输入 keep -> 投掷时保留玩家自定义准星		| cl_grenadecrosshair_keepusercrosshair 1;
echo ──── 以下功能，在跑图模式下，产生按键冲突，后启动的模式按键优先：
echo ──── 开启或关闭T形准星	            : ←键  | cl_crosshair_t 1;
echo ──── 开启或关闭准星中心点		    : →键  | cl_crosshairdot 1;
echo ·输入 nothrow | 快捷键↑    ->  关闭投掷物准星
echo ·输入  throw  | 快捷键↓    ->  开启投掷物准星
echo ──────────────────────   准星库   ─────────────────────────────
echo ·输入 c00 -> 默认准星 | 准星代码:CSGO-hkk78-Mz6UK-XJ9t2-Dv3E3-qbOUD
echo ·输入 c01 -> 细线静态标准小准星 | 准星代码: CSGO-H9mcs-8GDFZ-MfxkQ-2Kx7O-pTLoD
echo ·输入 c02 -> 跟枪抖动动态准星 | 准星代码: CSGO-oK2db-LY2wT-seq73-YTnJB-3bOUD
echo ·输入 c03 -> 移动聚焦动态准星 | 准星代码: CSGO-9StUb-FrcBs-HhYjr-mzVip-YScNE
echo ·输入 c04 -> 小圆点静态准星 | 准星代码: CSGO-pqEaF-5AKXB-DCdnh-vpxAJ-94GSQ
echo ·输入 c05 -> 导播专用大号准星 | 准星代码: CSGO-Q4APO-buiyc-i9V7H-7sxJN-Zy8rN
echo ·输入 c06 -> Anyingi_Csgo | 准星代码: CSGO-LpB26-mhWAt-srQVK-fEE34-BWxTC
echo ────────────────────   持枪视角库   ────────────────────────────
echo ·输入 v00 -> 默认视角 | 68/2/2/-1/0
echo ·输入 v01 -> Niko中心视角 | 60/0/1/-2/0
echo ·输入 v02 -> 大幅偏右开阔视角 | 68/2.5/-1/-2/0
echo ·输入 v03 -> 偏右偏中开阔视角 | 68/1.5/-2/-2/0
echo ·输入 v04 -> 不挡视野视角 | 65/2.5/-2/-2/0
echo ·输入 v05 -> 导播demo视角 | 62/2.5/2/-2/0
echo ·输入 v06 -> Anyingi_Csgo  | 68/2.5/0/-1.5/2
echo ═════════════════════════════════════════════════════════════
```

## cs2_video.txt

> ⚠️ 注意，此文件中的`//(例)注释`等在使用时需删除。

```
"video.cfg"
{
	"Version"		"16"  // 配置文件版本号
	"VendorID"		"4318"  // 显卡厂商识别码，此处为NVIDIA
	"DeviceID"		"10464"  // 显卡设备识别码，此处为RTX 4060
	"setting.cpu_level"		"3" // CPU 性能等级梯队
	"setting.gpu_mem_level"		"3" // GPU 显存性能等级梯队
	"setting.gpu_level"		"3" // GPU 性能等级梯队
	"setting.knowndevice"		"0" // 显卡设备（0 为主显卡）
	"setting.monitor_index"		"0" // 显示器索引（0 为主显示器）
	"setting.defaultres"		"1280" // 分辨率宽度
	"setting.defaultresheight"		"960" // 分辨率高度
	"setting.aspectratiomode"		"0" // 宽高比模式（0 为自动，1 为 4:3，2 为 16:9）
	"setting.refreshrate_numerator"		"0" // 刷新率分子（0 表示使用默认值）
	"setting.refreshrate_denominator"		"0" // 刷新率分母（0 表示使用默认值）
	"setting.fullscreen"		"0" // 是否启用全屏模式（0 为否，1 为是）
	"setting.coop_fullscreen"		"1" // 合作模式是否启用全屏（1 为是）
	"setting.nowindowborder"		"1" // 是否启用无边框窗口模式（1 为是）
	"setting.fullscreen_min_on_focus_loss"		"0" // 失去焦点时是否最小化全屏窗口（0 为否）
	"setting.high_dpi"		"0" // 是否启用高 DPI 缩放（0 为否）
	"setting.mat_vsync"		"0" // V-sync 是否启用垂直同步（0 为否，1 为是）
	"setting.r_low_latency"		"0" // 是否启用低延迟模式（1 为是）
	"AutoConfig"		"2" // 自动配置等级（2 为自定义配置）
	"setting.msaa_samples"		"2" // 多重采样抗锯齿（MSAA）采样数（2 为 2x MSAA）
	"setting.r_csgo_cmaa_enable"		"1" // 是否启用 CMAA 抗锯齿（0 为否）
	"setting.videocfg_shadow_quality"		"3" // 全局阴影效果（0 为低，1 为中，2 为高，3 为非常高）
	"setting.videocfg_dynamic_shadows"		"1" // 动态阴影的启用（1 为是）
	"setting.videocfg_texture_detail"		"1" // 模型/贴图细节（0 为低，1 为中，2 为高）
	"setting.r_texturefilteringquality"		"3" // 贴图过滤模式（0-5，双线性、三线性、异项2X、4X、8X、16X）
	"setting.shaderquality"		"0" // 光影细节（0 为低，1 为高）
	"setting.videocfg_particle_detail"		"0" // 粒子细节（0 为低，1 为中，2 为高，3 为非常高）
	"setting.videocfg_ao_detail"		"0" // 环境光遮蔽（AO）细节（0 为禁用，2 为中，3 为高）
	"setting.videocfg_hdr_detail"		"3" // 高动态范围 （-1为品质，3为性能）
	"setting.videocfg_fsr_detail"		"0" // 超级分辨率FSR（0 为禁用，1、2、3、4分别为超高品质、品质、均衡、性能）
}
```
