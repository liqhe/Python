### str.capitalize()

返回原字符串的副本，其首个字符大写，其余为小写。
```python
def capitalize(self, *args, **kwargs): # real signature unknown
    """
    Return a capitalized version of the string.
    More specifically, make the first character have upper case and the rest lower case.
    """
    pass
```
示例：

```python
s = 'aaBBccDD'
print(s.capitalize())

结果：Aabbccdd
```

---

### str.casefold()

返回原字符串消除大小写的副本。 消除大小写的字符串可用于忽略大小写的匹配。

消除大小写类似于转为小写，但是更加彻底一些，因为它会移除字符串中的所有大小写变化形式。 例如，德语小写字母 `'ß'` 相当于 `"ss"`。 由于它已经是小写了，lower()不会对 `'ß'` 做任何改变；而 casefold()则会将其转换为 `"ss"`。

```python
def casefold(self, *args, **kwargs): # real signature unknown
    """ 
    Return a version of the string suitable for caseless comparisons. 
    """
    pass
```

示例：

```python
s = 'aaBBccDD'
print(s.casefold())

结果：aabbccdd
```

---

### str.center(*width*[, *fillchar*])

返回长度为 *width* 的字符串，原字符串在其正中。 使用指定的 *fillchar* 填充两边的空位（默认使用 ASCII 空格符）。 如果 *width* 小于等于 `len(s)` 则返回原字符串的副本。

```python
def center(self, *args, **kwargs): # real signature unknown
    """
    Return a centered string of length width.
    Padding is done using the specified fill character (default is a space).
    """
    pass
```

示例：

```python
s = 'aaBBccDD'
print(s.center(10, '-'))

结果：-aaBBccDD-
```

---

### str.count(*sub*[, *start*[, *end*]])

返回子字符串 *sub* 在 [*start*, *end*] 范围内非重叠出现的次数。 可选参数 *start* 与 *end* 会被解读为切片表示法。

```python
def count(self, sub, start=None, end=None): # real signature unknown; restored from __doc__
    """
    S.count(sub[, start[, end]]) -> int
    Return the number of non-overlapping occurrences of substring sub in
    string S[start:end].  Optional arguments start and end are
    interpreted as in slice notation.
    """
    return 0
```

示例：

```python
s = 'aaBBccDD'
print(s.count('a'))

结果：2
```

---

### str.encode(encoding="utf-8", errors="strict")

返回原字符串编码为字节串对象的版本。 默认编码为 `'utf-8'`。 可以给出 errors 来设置不同的错误处理方案。 errors 的默认值为 `'strict'`，表示编码错误会引发 UnicodeError。 其他可用的值为 `'ignore'`, `'replace'`, `'xmlcharrefreplace'`, ``'backslashreplace'`` 以及任何其他通过 codecs.register_error() 注册的值。

```python
def encode(self, *args, **kwargs): # real signature unknown
    """
    Encode the string using the codec registered for encoding.
      encoding
        The encoding in which to encode the string.
      errors
        The error handling scheme to use for encoding errors.
        The default is 'strict' meaning that encoding errors raise a
        UnicodeEncodeError.  Other possible values are 'ignore', 'replace' and
        'xmlcharrefreplace' as well as any other name registered with
        codecs.register_error that can handle UnicodeEncodeErrors.
    """
    pass
```

示例：

```python
s = 'aaBBccDD'
print(s.encode())

结果：b'aaBBccDD'
```

---

### str.endswith(*suffix*[, *start*[, *end*]])

如果字符串以指定的 *suffix* 结束返回 `True`，否则返回 `False`。 *suffix* 也可以为由多个供查找的后缀构成的元组。 如果有可选项 *start*，将从所指定位置开始检查。 如果有可选项 *end*，将在所指定位置停止比较。

```python
def endswith(self, suffix, start=None, end=None): # real signature unknown; restored from __doc__
    """
    S.endswith(suffix[, start[, end]]) -> bool
    Return True if S ends with the specified suffix, False otherwise.
    With optional start, test S beginning at that position.
    With optional end, stop comparing S at that position.
    suffix can also be a tuple of strings to try.
    """
    return False
```

示例：

```python
s = 'aaBBccDD'
print(s.endswith('DD'))

结果：True
```

---

### str.expandtabs(*tabsize=8*)

返回字符串的副本，其中所有的制表符会由一个或多个空格替换，具体取决于当前列位置和给定的制表符宽度。 每 *tabsize* 个字符设为一个制表位（默认值 8 时设定的制表位在列 0, 8, 16 依次类推）。 要展开字符串，当前列将被设为零并逐一检查字符串中的每个字符。 如果字符为制表符 (`\t`)，则会在结果中插入一个或多个空格符，直到当前列等于下一个制表位。 （制表符本身不会被复制。） 如果字符为换行符 (`\n`) 或回车符 (`\r`)，它会被复制并将当前列重设为零。 任何其他字符会被不加修改地复制并将当前列加一，不论该字符在被打印时会如何显示。

```python
def expandtabs(self, *args, **kwargs): # real signature unknown
    """
    Return a copy where all tab characters are expanded using spaces.
    If tabsize is not given, a tab size of 8 characters is assumed.
    """
    pass
```

示例：

```python
s = 'aa\tBB\tcc\tDD'
print(s.expandtabs())
print(s.expandtabs(4))

结果：
aa      BB      cc      DD
aa  BB  cc  DD
```

---

### str.find(*sub*[, *start*[, *end*]])

返回子字符串 *sub* 在 `s[start:end]` 切片内被找到的最小索引。 可选参数 *start* 与 *end* 会被解读为切片表示法。 如果 *sub* 未被找到则返回 `-1`。

```python
def find(self, sub, start=None, end=None): # real signature unknown; restored from __doc__
    """
    S.find(sub[, start[, end]]) -> int
    Return the lowest index in S where substring sub is found,
    such that sub is contained within S[start:end].  Optional
    arguments start and end are interpreted as in slice notation.
    Return -1 on failure.
    """
    return 0
```

示例：

```python
s = 'aaBBccDD'
print(s.find('cc'))
print(s.find('ee'))

结果：
4
-1
```

---

### str.format(**args*, ***kwargs*)

执行字符串格式化操作。 调用此方法的字符串可以包含字符串字面值或者以花括号 `{}` 括起来的替换域。 每个替换域可以包含一个位置参数的数字索引，或者一个关键字参数的名称。 返回的字符串副本中每个替换域都会被替换为对应参数的字符串值。

```python
def format(self, *args, **kwargs): # known special case of str.format
    """
    S.format(*args, **kwargs) -> str
    Return a formatted version of S, using substitutions from args and kwargs.
    The substitutions are identified by braces ('{' and '}').
    """
    pass
```

示例：

1. 按位置访问参数:

```python
>>>'{0}, {1}, {2}'.format('a', 'b', 'c')
'a, b, c'
>>> '{}, {}, {}'.format('a', 'b', 'c')  # 3.1+ only
'a, b, c'
>>> '{2}, {1}, {0}'.format('a', 'b', 'c')
'c, b, a'
>>> '{2}, {1}, {0}'.format(*'abc')      # unpacking argument sequence
'c, b, a'
>>> '{0}{1}{0}'.format('abra', 'cad')   # arguments' indices can be repeated
'abracadabra'
```

2. 按名称访问参数:

```python
>>> 'Coordinates: {latitude}, {longitude}'.format(latitude='37.24N', longitude='-115.81W')
'Coordinates: 37.24N, -115.81W'
>>> coord = {'latitude': '37.24N', 'longitude': '-115.81W'}
>>> 'Coordinates: {latitude}, {longitude}'.format(**coord)
'Coordinates: 37.24N, -115.81W'
```

3. 访问参数的属性:

```python
>>> c = 3-5j
>>> ('The complex number {0} is formed from the real part {0.real} '
...  'and the imaginary part {0.imag}.').format(c)
'The complex number (3-5j) is formed from the real part 3.0 and the imaginary part -5.0.'
>>> class Point:
...     def __init__(self, x, y):
...         self.x, self.y = x, y
...     def __str__(self):
...         return 'Point({self.x}, {self.y})'.format(self=self)
...
>>> str(Point(4, 2))
'Point(4, 2)'
```

4. 访问参数的项:

```python
>>> coord = (3, 5)
>>> 'X: {0[0]};  Y: {0[1]}'.format(coord)
'X: 3;  Y: 5'
```

5. 替代 `%s` 和 `%r`:

```python
>>> "repr() shows quotes: {!r}; str() doesn't: {!s}".format('test1', 'test2')
"repr() shows quotes: 'test1'; str() doesn't: test2"
```

6. 对齐文本以及指定宽度:

```python
>>> '{:<30}'.format('left aligned')
'left aligned                  '
>>> '{:>30}'.format('right aligned')
'                 right aligned'
>>> '{:^30}'.format('centered')
'           centered           '
>>> '{:*^30}'.format('centered')  # use '*' as a fill char
'***********centered***********'
```

7. 替代 `%+f`, `%-f` 和 `% f` 以及指定正负号:

```python
>>> '{:+f}; {:+f}'.format(3.14, -3.14)  # show it always
'+3.140000; -3.140000'
>>> '{: f}; {: f}'.format(3.14, -3.14)  # show a space for positive numbers
' 3.140000; -3.140000'
>>> '{:-f}; {:-f}'.format(3.14, -3.14)  # show only the minus -- same as '{:f}; {:f}'
'3.140000; -3.140000'
```

8. 替代 `%x` 和 `%o` 以及转换基于不同进位制的值:

```python
>>> # format also supports binary numbers
>>> "int: {0:d};  hex: {0:x};  oct: {0:o};  bin: {0:b}".format(42)
'int: 42;  hex: 2a;  oct: 52;  bin: 101010'
>>> # with 0x, 0o, or 0b as prefix:
>>> "int: {0:d};  hex: {0:#x};  oct: {0:#o};  bin: {0:#b}".format(42)
'int: 42;  hex: 0x2a;  oct: 0o52;  bin: 0b101010'
```

9. 使用逗号作为千位分隔符:

```python
>>> '{:,}'.format(1234567890)
'1,234,567,890'
```

10. 表示为百分数:

```python
>>> points = 19
>>> total = 22
>>> 'Correct answers: {:.2%}'.format(points/total)
'Correct answers: 86.36%'
```

11. 使用特定类型的专属格式化:

```python
>>> import datetime
>>> d = datetime.datetime(2010, 7, 4, 12, 15, 58)
>>> '{:%Y-%m-%d %H:%M:%S}'.format(d)
'2010-07-04 12:15:58'
```

12.嵌套参数以及更复杂的示例:

```python
>>> for align, text in zip('<^>', ['left', 'center', 'right']):
...     '{0:{fill}{align}16}'.format(text, fill=align, align=align)
...
'left<<<<<<<<<<<<'
'^^^^^center^^^^^'
'>>>>>>>>>>>right'
>>>
>>> octets = [192, 168, 0, 1]
>>> '{:02X}{:02X}{:02X}{:02X}'.format(*octets)
'C0A80001'
>>> int(_, 16)
3232235521
>>>
>>> width = 5
>>> for num in range(5,12): 
...     for base in 'dXob':
...         print('{0:{width}{base}}'.format(num, base=base, width=width), end=' ')
...     print()
...
    5     5     5   101
    6     6     6   110
    7     7     7   111
    8     8    10  1000
    9     9    11  1001
   10     A    12  1010
   11     B    13  1011
```

---