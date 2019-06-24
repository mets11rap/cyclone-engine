/**
 * Class representing a command.
 */
class Command {
  /**
   * Create a command.
   * @class
   * @param {Object}                                         data                            The command data.
   * @prop  {String}                                         data.name                       The command name.
   * @prop  {String}                                         data.desc                       The command description.
   * @prop  {Object}                                         [data.options={}]               The command options.
   * @prop  {Object[]}                                       [data.options.args=[]]          List of arguments that the command takes.
   * @prop  {String}                                         [data.options.dbTable='']       Name of database table to fetch, data is passed through to action with the same name.
   * @prop  {Boolean}                                        [data.options.restricted=false] Whether or not this command is restricted to admin only.
   * @prop  {function(CommandData): (CommandResults|String)} data.action                     The command action.
   */
  constructor ({ name, desc, options = {}, action }) {
    const {
      args = [],
      dbTable = '',
      restricted = false
    } = options

    /**
     * The command name.
     * @type {String}
     */
    this.name = name

    /**
     * The command description.
     * @type {String}
     */
    this.desc = desc

    /**
     * List of arguments that the command takes.
     * @type {Arg[]}
     */
    this.args = args

    /**
     * Name of database table to fetch, data is passed through to action with the same name.
     * @type {String}
     */
    this.dbTable = dbTable

    /**
     * Whether or not this command is restricted to admin only.
     * @type {Boolean}
     */
    this.restricted = restricted

    /**
     * The command action.
     * @type {function(CommandData): (CommandResults|String)}
     */
    this.action = action
  }

  /**
   * Get info of this command.
   * @returns {String} A string describing the command. (**name <mand arg> (optional arg)** - *description*)
   */
  get info () {
    return `**${this.name}` + this.args.reduce((a, e, i) => {
      const content = a + (e.mand ? `<${e.name}>` : `(${e.name})`) + (e.delim || ' ')
      return (i === this.args.length - 1) ? content.slice(0, -1 * (e.delim ? e.delim.length : 1)) : content
    }, ' ') + `** - *${this.desc}*`
  }
}

module.exports = Command

/**
 * Object passed to a command action.
 * @typedef {Object}                CommandData
 * @prop    {Agent}                 agent       The agent managing the bot.
 * @prop    {Eris.Client}           client      The Eris client.
 * @prop    {Map<String, Command>}  commands    The list of bot commands.
 * @prop    {Map<String, Replacer>} replacers   The list of bot replacers.
 * @prop    {Eris.Message}          msg         The message sent by the user.
 * @prop    {String[]}              args        The arguments supplied by the user.
 * @prop    {Object}                *           The data of the user in the database if requested. (Param name is table name)
 * @prop    {QueryBuilder}          knex        The simple-knex query builder used by the command handler.
 */

/**
 * Object returned by a command.
 * @typedef  {Object}       CommandResults
 * @prop     {Command}      command        The object of the command called.
 * @prop     {String}       content        The resulting message content sent by the bot.
 * @prop     {Eris.Embed}   embed          The resulting embed sent by the bot.
 * @prop     {Buffer}       file           The resulting file sent by the bot.
 * @prop     {Eris.Message} rsp            The message object sent to Discord.
 */
