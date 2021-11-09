import type {
  ProtectedPropertyWechatySkeleton,
}                                   from './wechaty-skeleton.js'
import {
  WechatySkeleton,
}                                   from './wechaty-skeleton.js'

import type {
  ProtectedPropertyGErrorMixin,
  GErrorMixin,
}                                   from './gerror-mixin.js'
import {
  gErrorMixin,
}                                   from './gerror-mixin.js'

import type {
  ProtectedPropertyPluginMixin,
  PluginMixin,
}                                   from './plugin-mixin.js'
import {
  pluginMixin,
}                                   from './plugin-mixin.js'

import type {
  ProtectedPropertyPuppetMixin,
  PuppetMixin,
}                                   from './puppet-mixin.js'
import {
  puppetMixin,
}                                   from './puppet-mixin.js'

import type {
  ProtectedPropertyWechatifyUserModuleMixin,
  WechatifyUserModuleMixin,
}                                   from './wechatify-user-module-mixin.js'
import {
  wechatifyUserModuleMixin,
}                                   from './wechatify-user-module-mixin.js'

type WechatyMixinProtectedProperty =
  | ProtectedPropertyWechatySkeleton
  | ProtectedPropertyGErrorMixin
  | ProtectedPropertyPluginMixin
  | ProtectedPropertyPuppetMixin
  | ProtectedPropertyWechatifyUserModuleMixin

export type {
  GErrorMixin,
  PluginMixin,
  PuppetMixin,
  WechatifyUserModuleMixin,
  WechatyMixinProtectedProperty,
}
export {
  gErrorMixin,
  pluginMixin,
  puppetMixin,
  wechatifyUserModuleMixin,
  WechatySkeleton,
}
