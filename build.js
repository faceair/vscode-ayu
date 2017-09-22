const fs = require('fs');
const path = require('path');
const ayu = require('ayu');

// https://github.com/ayu-theme/ayu-vim/tree/master/term
const terminalColors = {
    dark: {
        background: ayu.dark.common.bg,
        foreground: ayu.dark.common.fg,
        black: ayu.dark.ui.gridDivider, // ayu-vim uses #0f1419
        red: ayu.dark.syntax.keyword,
        green: ayu.dark.syntax.string,
        yellow: ayu.dark.syntax.func,
        blue: ayu.dark.syntax.tag,
        magenta: '#ca30c7',
        cyan: ayu.dark.syntax.regexp,
        white: '#c7c7c7',
        brightBlack: '#686868',
        brightRed: ayu.dark.syntax.supVar,
        brightGreen: '#cbe645',
        brightYellow: ayu.dark.syntax.constant,
        brightBlue: '#6871ff',
        brightMagenta: '#ff77ff',
        brightCyan: '#a6fde1',
        brightWhite: '#ffffff'
    }
};

['dark'].forEach(createTheme);

function createTheme(variant) {
    const filepath = path.join(__dirname, `/ayu-one-${variant}.json`);
    const theme = JSON.parse(fs.readFileSync(filepath));

    theme.colors = getThemeColors(variant);

    fs.writeFileSync(filepath, JSON.stringify(theme, null, '\t'));
    console.log(`Updated ${filepath}`);
}

function getThemeColors(variant) {
    const scheme = ayu[variant];

    return {
        // ----- Base colors -----
        'foreground': scheme.ui.fg,
        'focusBorder': `${scheme.ui.fg}8A`,
        // 'contrastBorder': '',
        // 'contrastActiveBorder': '',

        'widget.shadow': `${scheme.ui.panel.shadow}b3`,

        'badge.background': scheme.ui.panel.pathFg,
        'badge.foreground': '#fff',

        'progressBar.background': scheme.common.accent,

        'input.background': scheme.ui.panel.bg,
        'input.foreground': scheme.common.fg,
        'input.border': `${scheme.ui.fg}4C`,
        'input.placeholderForeground': `${scheme.ui.fg}8A`,

        'inputOption.activeBorder': `${scheme.ui.fg}8A`,

        'inputValidation.infoBackground': scheme.common.bg,
        'inputValidation.infoBorder': scheme.syntax.tag,
        'inputValidation.warningBackground': scheme.common.bg,
        'inputValidation.warningBorder': scheme.syntax.func,
        'inputValidation.errorBackground': scheme.common.bg,
        'inputValidation.errorBorder': scheme.syntax.error,

        'dropdown.background': scheme.ui.panel.bg,
        // 'dropdown.foreground': '',
        // 'dropdown.border': '',

        'list.focusAndSelectionBackground': scheme.ui.gridDivider,
        'list.focusAndSelectionForeground': scheme.common.fg,
        'list.activeSelectionBackground': scheme.ui.gridDivider,
        'list.activeSelectionForeground': scheme.common.fg,
        'list.inactiveSelectionBackground': scheme.common.bg,
        'list.inactiveSelectionForeground': scheme.common.fg,
        'list.focusBackground': scheme.ui.panel.rowBg,
        'list.focusForeground': scheme.common.fg,
        'list.hoverBackground': scheme.ui.panel.rowBg,
        'list.hoverForeground': scheme.common.fg,
        // 'list.dropBackground': '',
        'list.highlightForeground': scheme.common.accent,

        'pickerGroup.foreground': scheme.common.accent,
        'pickerGroup.border': scheme.ui.gridDivider,

        'button.background': `${scheme.common.accent}AA`,
        'button.hoverBackground': `${scheme.common.accent}BB`,
        'button.foreground': '#fff',

        'scrollbar.shadow': `${scheme.ui.panel.shadow}11`,
        'scrollbarSlider.background': `${scheme.ui.scrollbar.puck}11`,
        'scrollbarSlider.hoverBackground': `${scheme.ui.scrollbar.puck}22`,
        'scrollbarSlider.activeBackground': `${scheme.ui.scrollbar.puck}22`,

        // See http://stackoverflow.com/a/7224621 for the semi-transparent issue workaround
        'selection.background': `${scheme.syntax.selection}fd`,

        // ----- Editor -----
        'editor.background': scheme.common.bg,
        'editor.foreground': scheme.common.fg,
        'editor.selectionBackground': scheme.syntax.selection,
        // 'editor.inactiveSelectionBackground': '',
        // 'editor.selectionHighlightBackground': '',
        'editor.findMatchBackground': `${scheme.common.accent}33`,
        'editor.findMatchHighlightBackground': `${scheme.common.accent}33`,
        'editor.findRangeHighlightBackground': `${scheme.common.accent}33`,
        'editorLink.activeForeground': scheme.common.accent,
        'editorLink.foreground': scheme.common.accent,
        'editorWidget.background': scheme.ui.panel.bg,
        'editor.lineHighlightBackground': scheme.syntax.lineHg,
        // 'editor.lineHighlightBorder': '',
        'editor.rangeHighlightBackground': scheme.syntax.lineHg,
        'editor.wordHighlightBackground': `${scheme.common.accent}33`,
        'editor.wordHighlightStrongBackground': `${scheme.common.accent}33`,
        'editorCursor.foreground': scheme.common.accent,
        'editorWhitespace.foreground': scheme.syntax.gutter,
        'editorIndentGuide.background': scheme.syntax.gutter,
        'editorLineNumber.foreground': scheme.syntax.gutter,
        // 'editorMarkerNavigationError.background': '',
        // 'editorMarkerNavigationWarning.background': '',
        'editorMarkerNavigation.background': scheme.ui.panel.bg,
        // 'editor.hoverHighlightBackground': '',
        'editorHoverWidget.background': scheme.ui.panel.bg,
        'editorHoverWidget.border': scheme.ui.gridDivider,
        // 'editorBracketMatch.background': '',
        'editorBracketMatch.border': scheme.syntax.gutter,
        'editorOverviewRuler.border': scheme.ui.gridDivider,
        'editorRuler.foreground': scheme.ui.gridDivider,

        // ----- Editor error squiggles -----
        // 'editorError.border': '',
        'editorError.foreground': scheme.syntax.error,
        // 'editorWarning.border': '',
        'editorWarning.foreground': scheme.common.accent,

        // ----- Editor gutter -----
        // 'editorGutter.background': '',
        'editorGutter.modifiedBackground': scheme.syntax.tag,
        'editorGutter.addedBackground': scheme.syntax.string,
        'editorGutter.deletedBackground': scheme.syntax.error,

        // ----- Editor suggest -----
        'editorSuggestWidget.background': scheme.ui.panel.bg,
        'editorSuggestWidget.border': scheme.ui.gridDivider,
        // 'editorSuggestWidget.foreground': '',
        'editorSuggestWidget.selectedBackground': scheme.ui.panel.rowBg,
        'editorSuggestWidget.highlightForeground': scheme.common.accent,

        // ----- Peek view editor -----
        'peekView.border': scheme.ui.gridDivider,
        'peekViewEditor.background': scheme.ui.panel.bg,
        'peekViewEditor.matchHighlightBackground': `${scheme.common.accent}33`,
        // 'peekViewEditorGutter.background': ''
        'peekViewTitle.background': scheme.ui.panel.bg,
        'peekViewTitleLabel.foreground': scheme.ui.fg,
        'peekViewTitleDescription.foreground': scheme.ui.fg,
        'peekViewResult.background': scheme.ui.panel.bg,
        // 'peekViewResult.selectionBackground': '',
        // 'peekViewResult.selectionForeground': '',
        'peekViewResult.matchHighlightBackground': `${scheme.common.accent}33`,
        'peekViewResult.fileForeground': scheme.ui.fg,
        // 'peekViewResult.lineForeground': '',

        //  ----- Diff editor -----
        'diffEditor.insertedTextBackground': `${scheme.syntax.regexp}44`,
        'diffEditor.removedTextBackground': `${scheme.syntax.supVar}44`,
        // 'diffEditor.insertedTextBorder': '',
        // 'diffEditor.removedTextBorder': '',

        // ----- Workbench: editor group -----
        'editorGroup.background': scheme.ui.panel.bg,
        'editorGroup.border': scheme.ui.gridDivider,
        // 'editorGroup.dropBackground': '',
        'editorGroupHeader.tabsBackground': scheme.common.bg,
        'editorGroupHeader.noTabsBackground': scheme.common.bg,
        "editorGroupHeader.tabsBorder": scheme.ui.gridDivider,

        // ----- Workbench: tabs -----
        'tab.activeBackground': scheme.ui.panel.bg,
        'tab.inactiveBackground': scheme.common.bg,
        'tab.activeForeground': scheme.common.fg,
        'tab.inactiveForeground': scheme.ui.fg,
        'tab.border': scheme.ui.gridDivider,
        'tab.unfocusedActiveForeground': `${scheme.common.fg}AA`,
        'tab.unfocusedInactiveForeground': scheme.ui.fg,

        // ----- Workbench: panel -----
        'panel.background': scheme.common.bg,
        'panel.border': scheme.ui.gridDivider,
        'panelTitle.activeForeground': scheme.common.fg,
        'panelTitle.inactiveForeground': scheme.ui.fg,
        'panelTitle.activeBorder': scheme.common.accent,

        // ----- Workbench: status bar -----
        'statusBar.foreground': scheme.ui.fg,
        'statusBar.background': scheme.ui.panel.bg,
        'statusBar.border': scheme.ui.gridDivider,
        'statusBar.noFolderBackground': scheme.ui.panel.bg,
        'statusBar.debuggingBackground': scheme.ui.panel.bg,
        'statusBar.debuggingForeground': scheme.ui.fg,
        'statusBarItem.activeBackground': scheme.ui.gridDivider,
        'statusBarItem.hoverBackground': scheme.ui.panel.rowBg,
        'statusBarItem.prominentBackground': scheme.ui.gridDivider,
        'statusBarItem.prominentHoverBackground': scheme.ui.panel.rowBg,

        // ----- Workbench: activity bar -----
        'activityBar.background': scheme.common.bg,
        'activityBar.foreground': scheme.ui.fg,
        'activityBar.border': scheme.ui.gridDivider,
        // 'activityBar.dropBackground': '',
        'activityBarBadge.background': scheme.syntax.activeGuide,
        'activityBarBadge.foreground': '#fff',

        // ----- Workbench: side bar -----
        'sideBar.background': scheme.common.bg,
        'sideBarTitle.foreground': scheme.ui.fg,
        'sideBarSectionHeader.background': scheme.syntax.lineHg,
        'sideBarSectionHeader.foreground': scheme.ui.fg,
        'sideBar.border': scheme.ui.gridDivider,

        // ----- Workbench: title bar -----
        'titleBar.activeForeground': scheme.ui.fg,
        'titleBar.inactiveForeground': scheme.ui.fg,
        'titleBar.activeBackground': scheme.common.bg,
        'titleBar.inactiveBackground': scheme.common.bg,
        'titleBar.border': scheme.ui.gridDivider,

        // ----- Workbench: notifications -----
        // 'notification.foreground': '',
        'notification.background': variant === 'light' ? scheme.common.fg : scheme.ui.gridDivider,

        // ----- Workbench: extension buttons -----
        'extensionButton.prominentBackground': `${scheme.common.accent}AA`,
        'extensionButton.prominentHoverBackground': `${scheme.common.accent}BB`,
        'extensionButton.prominentForeground': '#fff',

        // ----- Workbench: welcome page / interactive playground -----
        'welcomePage.quickLinkBackground': scheme.ui.panel.rowBg,
        'welcomePage.quickLinkHoverBackground': scheme.ui.gridDivider,
        'welcomeOverlay.foreground': scheme.common.fg,
        // 'welcomeOverlay.background': '',
        'walkThrough.embeddedEditorBackground': scheme.ui.panel.bg,
        'textLink.foreground': scheme.common.accent,
        'textLink.activeForeground': scheme.common.accent,
        'textPreformat.foreground': scheme.common.fg,
        'textBlockQuote.background': scheme.ui.panel.bg,
        // 'textBlockQuote.border': '',
        // 'textCodeBlock.background: '',

        // ----- Workbench: debug -----
        'debugExceptionWidget.border': scheme.ui.gridDivider,
        'debugExceptionWidget.background': scheme.ui.panel.bg,
        'debugToolBar.background': scheme.ui.panel.bg,

        // ----- Workbench: terminal -----
        'terminal.background': terminalColors[variant].background,
        'terminal.foreground': terminalColors[variant].foreground,
        'terminal.ansiBlack': terminalColors[variant].black,
        'terminal.ansiRed': terminalColors[variant].red,
        'terminal.ansiGreen': terminalColors[variant].green,
        'terminal.ansiYellow': terminalColors[variant].yellow,
        'terminal.ansiBlue': terminalColors[variant].blue,
        'terminal.ansiMagenta': terminalColors[variant].magenta,
        'terminal.ansiCyan': terminalColors[variant].cyan,
        'terminal.ansiWhite': terminalColors[variant].white,
        'terminal.ansiBrightBlack': terminalColors[variant].brightBlack,
        'terminal.ansiBrightRed': terminalColors[variant].brightRed,
        'terminal.ansiBrightGreen': terminalColors[variant].brightGreen,
        'terminal.ansiBrightYellow': terminalColors[variant].brightYellow,
        'terminal.ansiBrightBlue': terminalColors[variant].brightBlue,
        'terminal.ansiBrightMagenta': terminalColors[variant].brightMagenta,
        'terminal.ansiBrightCyan': terminalColors[variant].brightCyan,
        'terminal.ansiBrightWhite': terminalColors[variant].brightWhite
    };
}
