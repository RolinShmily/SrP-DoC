# 更新日志

这里仅做每次修改时的日志，发布版本的日志请到项目[Github Release](https://github.com/RolinShmily/SrP-CFG_ForCS2/releases)中查看

## 2025-11-08

### autoexec
- 添加HUD颜色更改命令
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