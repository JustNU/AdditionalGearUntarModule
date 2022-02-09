class Mod
{
    constructor()
    {
		Logger.info("Loading: AdditionalGear - UNTAR Module");
		
		ModLoader.onLoad["AdditionalGearUntarModule"] = require("./src/additionalgearuntar.js").onLoadMod;
    }
}

module.exports.Mod = new Mod();