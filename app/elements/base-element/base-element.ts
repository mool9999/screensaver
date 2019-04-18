/*
 ~ Copyright (c) 2016-2017, Michael A. Updike All rights reserved.
 ~ Licensed under Apache 2.0
 ~ https://opensource.org/licenses/Apache-2.0
 ~ https://goo.gl/wFvBM1
 */

import {PolymerElement} from '../../node_modules/@polymer/polymer/polymer-element.js';
import {customElement} from '../../node_modules/@polymer/decorators/lib/decorators.js';
import {GestureEventListeners} from '../../node_modules/@polymer/polymer/lib/mixins/gesture-event-listeners.js';
import {DeclarativeEventListeners} from '../../node_modules/@polymer/decorators/lib/declarative-event-listeners.js';

import '../../node_modules/@polymer/paper-styles/typography.js';
import '../../node_modules/@polymer/paper-styles/color.js';

import '../../node_modules/@polymer/iron-flex-layout/iron-flex-layout-classes.js';

import '../../elements/shared-styles.js';
import {I8nMixin} from '../../elements/mixins/i8n_mixin.js';

import '../../scripts/chrome-extension-utils/scripts/ex_handler.js';

/**
 * Base element for all our PolymerElements
 *
 * @remarks
 * Implements the internationalization mixin and adds support for the '@listen' decorator.
 *
 * It also includes all the basic polymer stuff
 */
@customElement('base-element')
export class BaseElement extends I8nMixin(GestureEventListeners(DeclarativeEventListeners(PolymerElement))) {
}
