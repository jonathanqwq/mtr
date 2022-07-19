# MTRmod 更新日志
::: tip 提醒
本日志的中文翻译可能不太准确，您可以fork这个文档的GitHub仓库，在修改完成后通过pull提交给我们
:::
[[toc]]

### 3.1.0-unofficial-2
- 修正了日语字符不能正确显示的问题。
- 修复了自动驾驶中列车停止后随机翻转的问题。
- 修正缆车车门突然关闭的问题。
- 改进并使用了新的列车BVE。
- 已知问题
    - 使用Forge 1.19游玩的玩家，请使用Architectury V5.7.xx，V5.8.xx或更高的版本可能会导致你的游戏崩溃。同时最新版本的Forge也有问题，也会导致你的游戏崩溃。目前我们已经测试了V41.0.63，它可以正常工作，但仍可能会出现意料之外的问题。
    - 一些玩家在手动驾驶列车时仍然遇到问题，包括但不限于服务器延迟以及看门狗错误。
::: details 英文原文
- Fixed Japanese characters not rendering properly
- Fixed manual vehicles randomly flipping after stopping
- Fixed cable car doors slamming shut
- Improved sound distance for trains using the new BVE sounds

Known Issues
- For Forge 1.19, please use Architectury version 5.7.xx. Versions 5.8.xx or higher might crash. The latest version of Forge also has problems. I have tested 41.0.63 and it seems to work.
- Some players are still experiencing issues with manual trains, including server lag and watchdog errors.
:::

### 3.1.0-unofficial-1
- ```@Nemo```制作出了BVE格式的列车声音文件！如果有一个MTR MVP GitHub贡献者奖，你一定会获得他的。</br>
到目前为止，使用这种格式的列车有：
    - London Underground 1995
    - London Underground 1996
    - London Underground D78
- 手动驾驶
    - 车辆段现在有 "手动驾驶 "选项
    - 按住司机键项，可以登上并控制车辆
    - 按 上/下箭头 来控制动力和刹车，用左箭头来打开或关闭车门
    - 列车在一定时间内无人操作会自动切换回自动模式（取决于侧线的设定）。
    - 除非列车有设定好的路径，否则列车是不会运行的。如果它不运行，请点击车库面板里的 "刷新路径"。
- 更多类型的文本显示已经采用缓存渲染以获得更好的性能，包括但不限于标志和车站名称。
::: details 英文原文
- Vehicle sounds in BVE format by ```@Nemo```! Really impressive! If there was an MTR MVP GitHub Contributor award, it would go to you. Trains using this format so far:
    - London Underground 1995
    - London Underground 1996
    - London Underground D78
- Manual vehicle driving
    - Sidings now have the "Drivable Vehicle" option
    - Hold the Driver Key item to board and control a vehicle
    - Press Up Arrow / Down Arrow to control the power and brake, and use the Left Arrow to open or close the doors
    - Vehicles will automatically switch back to auto mode after a certain time (specified by the siding)
    - Vehicles will not move unless there is a valid path generated for the vehicle. Click "Refresh Path" in the depot if it is not working.
- More types of text display now use cached rendering for better performance, including signs and station names
:::

### 3.0.1-prerelease-1
- 修正了车站彩色玻璃的渲染，感谢ZiYueCommentar的修正。
- 现在列车在站台停靠世界最大可以设定至10分钟! 感谢@LX86提供的这项功能。
::: details 英文原文
- Fixed station coloured glass rendering by ZiYueCommentar
- Platform dwell time can now go up to 10 minutes! Thanks to ``````@LX86`````` for this feature.
:::

### 3.0.1-unofficial-6-hotfix-1
- 修正了电梯上下的一些问题
- Catch some errors for train rendering
::: details 英文原文
- Fixed issues with getting on and off lifts
- Catch some errors for train rendering
:::

### 3.0.1-unofficial-6
- 变化
    - 增加了双向开门的电梯
    - 修正Minecraft Forge服务器崩溃的问题
    - Fixed lift player mounting issues, including when the player gets kicked off when moving too far
    - 减轻了电梯的某些延迟问题
- 注意事项
    - 某些时候当你按下电梯的按钮时，它不会变成红色。我已经在进行修复了。
    - 电梯似乎只能容纳一名玩家。
    - 有时当您进入电梯时会出现故障。您可以试着从侧面进入。
    - 我很清楚，Minecraft 1.19将在```2022年7月6日```发布。请不要要求将MOD更新到1.19，因为我需要做好一切准备才会制作1.19版本的mod，这包括我不得不等待Minecraft Forge和Architectury mod的更新。谢谢你们的耐心。
- 我知道很多人要求电梯能有更多的尺寸。目前我还在考虑是否有必要这样做。
::: details 英文原文
- Changes
    - Double-sided lifts
    - Fixed Minecraft Forge server crashing
    - Fixed lift player mounting issues, including when the player gets kicked off when moving too far
    - Reduced some lag from lifts
- Notes
    - Sometimes the lift button doesn't turn red when you press on it. I am working on a fix.
    - The lift seems to only be able to hold one player. 
    - Sometimes boarding a lift is glitchy. Try getting on sideways.
    - I am well aware that Minecraft 1.19 will be released on 7/6/2022. Please do not request the mod to be updated to 1.19, because I will do that when I'm ready. I will have to wait for Minecraft Forge and the Architectury mod to be updated before this can be done. Thank you for your patience.
- I know many of you requested more lift sizes. I am still considering if this is necessary.
:::

### 3.0.1-unofficial-5
- 增加了电梯! 以下是我们建议的建筑步骤。
    1. 在墙上，为你想让电梯去的地方放下电梯轨道。
    2. 使用**电梯楼层轨道**来创建楼层（你希望电梯停在哪里就放在哪里）。
    3. 在每个楼层放置电梯按钮，然后使用**电梯按钮连接器**连接，将按钮连接到一个或多个**电梯楼层轨道**。升降机按钮可用于控制多台升降机。
    4. 使用 "生成电梯"来放置实际的电梯轿厢。电梯必须在任何时候都接触到升降机轨道。
    5. 在每个楼层放置电梯门。
    6. 就像模型中的任何车辆一样进出电梯。当进入电梯时，按Z键可以打开楼层选择菜单。
- 更好的蓝图支持，并增加了对Dynmap和Squaremap支持! 如果你不知道这些是什么，请先谷歌一下、必应一下、百度一下。
- 以伦敦地铁1995年和1996年车辆为基础的列车现在将与站台门/闸门对齐。
::: details 英文原文
- Added lifts! Suggested building steps:
    1. On a wall, place down Lift Tracks for where you want the lift to go.
    2. Use Floor Lift Tracks to create floors (where you want the lift to stop and open the doors).
    3. Place down Lift Buttons on each floor, then use the Lift Buttons Link Connector to connect the buttons to one or more Floor Lift Tracks. Lift Buttons can be used to control multiple lifts.
    4. Use the Spawn Lift item to place down the actual lift carriage. It must be touching Lift Tracks at all times.
    5. Place down Lift Doors on each floor.
    6. Enter and exit the lift just like any other vehicle in the mod. When inside, press Z to open up the floor selection menu.
- Better Bluemap support and added Dynmap and Squaremap support! If you don't know what those are, please Google it first.
- Custom trains with the London Underground 1995 or 1996 stock as the base train type will now line up with platform doors/gates.
:::

### 3.0.1-unofficial-4-hotfix-1
- 现有的旧格式的自定义火车的世界将有正确的间距（而不是渲染它们重叠）。
- 一些资源包的格式错误将不再导致游戏直接崩溃
- Fixed R-Train not showing train barriers
::: details 英文原文
- Existing worlds with custom trains of the old format will have the correct spacing (instead of rendering them overlapped)
- Some resource pack format errors will no longer cause the game to just crash
- Fixed R-Train not showing train barriers
:::

### 3.0.1-unofficial-4
::: details 英文原文
- Changes
    - New item: Resource Pack Creator
        1. Right click the item to use.
        2. Click the Options button on the bottom left.
        3. Import your Blockbench file and texture. Optionally, you may also import a JSON properties file.
        4. Rename your train and choose a unique ID.
        5. Press Done
        6. Parts from the Blockbench model should now show up on the left pane. Click + to add it to the model list.
        7. Edit each item in the model list by clicking on the pencil icon.
        8. Adjust values as needed.
            - Whitelisted / blacklisted car examples:
                - ```%2```: only even numbered cars
                - ```%2+1```: only odd numbered cars
                - ```%3```: only car numbers of multiples of 3
                - ```4```: only car 4
                - ```-2```: only the second to last car
            - Door: how many units the doors will open
            - Gangway connection ID: The texture path of the resource. For example, if ```mtr:textures/entity/sp1900``` was used, the game will attempt to find the following textures:
                - ```mtr:textures/entity/sp1900_connector_exterior.png```
                - ```mtr:textures/entity/sp1900_connector_floor.png```
                - ```mtr:textures/entity/sp1900_connector_roof.png```
                - ```mtr:textures/entity/sp1900_connector_side.png```
            - Train barrier ID: The texture path of the resource. For example, if ```mtr:textures/entity/r179``` was used, the game will attempt to find the following textures:
                - ```mtr:textures/entity/r179_barrier_exterior.png```
        9. Export the resource pack and test it in game!
        10. If you need to make changes, you can always unzip the exported resource pack and import the .bbmodel (Blockbench file), .json (properties file), and .png (texture file) to edit.
        Hopefully this feature can assist resource pack authors and make your lives easier! 
    - R-Train by``` @Marcus K 929``` and ```@Eric and the SP1900``` train! Well done!
    - Train barrier concept and textures by ```@ExtrememakerX```! Nice work!
    - Fixed trains jittering when coordinates are high
- Known Issues
    - If you have used custom trains in the past, the sidings will need to be reconfigured or else the trains will appear to be stacked.
    - Resource pack authors: Please plan to update your packs to the new version via the Resource Pack Creator by the time when the official 3.0.1 version is released.
:::

### 3.0.1-unofficial-3
::: details 英文原文
- New features for the online system map:
    - Now shows vehicle jams! Click on a line to see the details. If no warning icon pops up, the line is not jammed.
    - Shows a list of online players and what line they are currently riding
- Fixed RHT cable cars not opening doors
- Optimised rail rendering
- Cable cars with route numbers should no longer repeat the announcement many times
- Added cable car icons on railway signs
- Added a double sided version of the tall station name block
- Added a client/server version check (will impact future versions of the mod)
:::

### 3.0.1-unofficial-2
::: details 英文原文
- Changes
    - Fixed freeze when breaking tiled station name signs
    - Cable car cables now only drop a maximum of 8 blocks regardless of the distance between nodes
    - Added RHT (right hand traffic) variants of light rail trains and cable cars
    - Class 802 sounds by ```@RedRails```
    - S-Train and R211 sounds
- Reminders
    - Players have reported a bug where the server might freeze if you attempt to teleport while riding a vehicle. This has not been fixed yet.
    - It is very important to backup your worlds before you install these updates!
:::

### 3.0.1-unofficial-1
::: details 英文原文
- Changes
    - Cable cars
        - Three types of cable car nodes: lower, upper, and station
        - Sidings, platforms, and curved connections can only be built on cable car station nodes
        - Otherwise, use the cable car connector item (not the other rail connectors)
        - If not using the station cable car node, connections must be perfectly straight
        - Additional cable car textures by ```@Marcus K 929``` 
    - Random sounds by ```@cherbert```
        - Experimental feature, only for the London Underground 1995 stock for now
        - When the train speed is high enough, it occasionally plays random track noises
        - Random sounds for other train types will be added in the future
    - Station name wall blocks can now be put next to each other and combined, just like station name entrance signs
    - Fixed invisible text when clicking on a route on the online map in dark mode
- Reminders
    - Existing addons from beta-9-prerelease-2 might be compatible with this version. Otherwise, please check with mod authors for updates.
    - It is very important to backup your worlds before you install these updates!
:::

### 3.0.0
```
这什么都没有，绝对不是黄芽娘的错，绝对不是（震声）
唯一能告诉你的是，这个版本与Beta-9-prerelease-2兼容
```
::: details 英文原文
```
这什么都没有，绝对不是黄芽娘的错，绝对不是（震声）
唯一能告诉你的是，这个版本与Beta-9-prerelease-2兼容
```
:::

### Beta-9-prerelease-2
::: details 英文原文
- Changes
    - Fixed blurry rendering of the online map for high resolution displays
    - Fixed Class 802 placeholder sounds not working
    - For circular routes, the PIDS and online map will now show more detail, for example "Clockwise via Green Horizons" rather than just the last stop of the route
- Reminders
    - This version is a prerelease! This means that beta-9 is coming soon. I will focus on bug fixes rather than adding new features.
    - Existing addons from beta-9-unofficial-2 might not be compatible with this version. Please check with mod authors for updates.
    - The Forge version does not work with 1.18.2! Please use 1.18.1 instead.
    - It is very important to backup your worlds before you install these updates!
:::

### Beta-9-prerelease-1
::: details 英文原文
- Changes
    - Improved the head of the Class 802 and added the TransPennine Express texture
    - Added Class 802 door sounds and placeholder engine sounds
    - Temporary fix for VR player mounting
    - Increased the range where PIDS can detect platform rails by one block
    - Fixed transparency issues for the Class 802
    - Added new translations for beta-9
    - Improved announcements and text for different transport modes, no more "This train is going to..." for boats!
- Reminders
    - This version is a prerelease! This means that beta-9 is coming soon. I will focus on bug fixes rather than adding new features.
    - **The ID of the Class 802 (GWR) has changed!** If you have set a siding to use the Class 802 train in the previous update, they will be reset to SP1900. **You must configure the siding again.**
    - Existing addons from beta-9-unofficial-2 should be compatible with this version.
    - The Forge version **does not work with 1.18.2**! Please use 1.18.1 instead.
    - It is **very important** to backup your worlds **before** you install these updates!
:::

### Beta-9-prerelease-1
::: details 英文原文
- Changes
    - Improved the head of the Class 802 and added the TransPennine Express texture
    - Added Class 802 door sounds and placeholder engine sounds
    - Temporary fix for VR player mounting
    - Increased the range where PIDS can detect platform rails by one block
    - Fixed transparency issues for the Class 802
    - Added new translations for beta-9
    - Improved announcements and text for different transport modes, no more "This train is going to..." for boats!
- Reminders
    - This version is a prerelease! This means that beta-9 is coming soon. I will focus on bug fixes rather than adding new features.
    - The ID of the Class 802 (GWR) has changed! If you have set a siding to use the Class 802 train in the previous update, they will be reset to SP1900. You must configure the siding again.
    - Existing addons from beta-9-unofficial-2 should be compatible with this version.
    - The Forge version does not work with 1.18.2! Please use 1.18.1 instead.
    - It is very important to backup your worlds before you install these updates!
:::

### Beta-9-unofficial-10
::: details 英文原文
- Changes
    - British Rail Class 802 train! Only the GWR texture is currently available; the TransPennine Express texture will be added in a future update.
    - Dashboard colour picker
    - Fixed trains disappearing occasionally when other players are riding on the same train
    - Improved directions for the online map, more details about each route is now shown
    - Improved serverside performance
    - Reduced file saving lag spikes
- Known Issues
    - Player is mounted incorrectly in VR
    - Trains still sometimes jam on extremely long routes
    - The Class 802 train has no sounds yet
:::

### Beta-9-unofficial-9
::: details 英文原文
Changes
- Fixed jams for trains with custom acceleration
- Temporary fix for boat and minecart incorrect dismount position
- Marble and station coloured slabs by ```@cherbert``` and ```@Eric and the SP1900 train```! Thank you for your contribution!
- Fixed hang on first world save
- Fixed bug where player would appear to ride multiple trains at once
- Passengers will no longer appear to be shaking when riding trains
- R211 model fixes by ```@Eric and the SP1900 train``` 

Known Issues
- Player is mounted incorrectly in VR
- Trains still sometimes jam on extremely long routes
- Trains might occasionally disappear if too many people are riding
:::

### Beta-9-unofficial-8
::: details 英文原文
- Changes
    - Arrival projectors can now be configured to only show certain arrivals! Right click with a brush to configure.
    - R211 by ```@Eric and the SP1900 train!``` Great work!
    - Fixed small rendering issues with the PSD top block
    - Fixed depot sliders resetting when editing train instructions
    - Serverside protection from adventure mode players editing the dashboard
- Known Issues
    - Player is mounted incorrectly in VR
:::

### Beta-9-unofficial-7
::: details 英文原文
- Changes
    - The white part above Platform Screen Doors is now also a standalone block!
       1. Place down Platform Screen Doors as normal
       2. Right click the top part with shears
       3. Break the glass/door parts of the Platform Screen Doors
       4. The top part should now stay!
    - The Train Announcer can now play sound files to train riders
    - Fixed some dynamically generated textures rendering as black
    - Fixed "player moved too quickly" issues on servers
    - Save files only get written to when dirty
    - Fixed first person jittering when riding trains with shaders
    - Added back 1.18.1 builds (upon popular request)
    - Fixed hidden route option not saving
- Known Issues
    - Player is mounted incorrectly in VR
:::

### Beta-9-unofficial-6-hotfix-2
::: details 英文原文
- Changes
    - Railway data is now saved as individual files and not as NBT data, eliminating autosave lag spikes
    - Further improved train riding once and for all and fixed known issues from the previous version
    - Only survival and creative players can edit the dashboards
- Known Issues
    - Player is mounted incorrectly in VR
    - Train flashing with shaders
:::

### Beta-9-unofficial-6-hotfix-1
::: details 英文原文
- Improved train riding and fixed known issues from the previous version
- Fixed CM-Stock handrails only visible from one side
- 1.18.2 compatibility (Fabric only! Use 1.18.1 for Forge)
- Use slider instead of text box for siding acceleration
- Show mod version in the settings panel of the online map
- Super secret update that everyone wanted
:::